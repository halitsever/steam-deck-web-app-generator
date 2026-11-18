import { after, test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { generateBashScript, isValidAppName, isValidUrl } from "../server/utils/bash-script.ts";

/** Fake SteamOS: stub commands log one argument per line, since the real ones only exist on a Deck. */
const homes: string[] = [];
after(() => homes.forEach((h) => rmSync(h, { recursive: true, force: true })));

const setup = () => {
  const home = mkdtempSync(join(tmpdir(), "sdwag-"));
  homes.push(home);
  const bin = join(home, "bin");
  mkdirSync(join(home, "Documents"));
  mkdirSync(bin);
  const stub = (name: string, log: string) => {
    writeFileSync(join(bin, name), `#!/bin/bash\nprintf '%s\\n' "$@" > "$HOME/${log}"\n`);
    chmodSync(join(bin, name), 0o755);
  };
  stub("steamos-add-to-steam", "added.txt");
  stub("flatpak", "flatpak.txt");
  return { home, bin, env: { ...process.env, HOME: home, PATH: `${bin}:${process.env.PATH}` } };
};

const runCase = (appName: string, siteUrl: string, useHomeFolder = false) => {
  const { home, bin, env } = setup();
  const script = join(home, "generated.sh");
  writeFileSync(script, generateBashScript(appName, siteUrl, useHomeFolder));
  execFileSync("bash", [script], { env, cwd: home, stdio: "pipe" });

  const launcher = join(useHomeFolder ? home : join(home, "Documents"), `${appName}.sh`);
  assert.ok(existsSync(launcher), `launcher ${launcher} was not created`);
  assert.ok(statSync(launcher).mode & 0o100, "launcher is not executable");
  assert.deepEqual(readFileSync(join(home, "added.txt"), "utf8").split("\n").slice(0, -1), [launcher]);

  // Point the launcher at the stub flatpak to see the exact URL Chrome would get.
  const testLauncher = join(home, "launcher-test.sh");
  writeFileSync(testLauncher, readFileSync(launcher, "utf8").replace("/usr/bin/flatpak", join(bin, "flatpak")));
  execFileSync("bash", [testLauncher], { env, cwd: home, stdio: "pipe" });
  const chromeArgs = readFileSync(join(home, "flatpak.txt"), "utf8").split("\n").slice(0, -1);
  assert.equal(chromeArgs.at(-1), siteUrl);
  assert.equal(chromeArgs.at(-2), "--kiosk");

  return home;
};

test("app name with spaces", () => {
  runCase("Xbox Cloud Gaming", "https://www.xbox.com/play");
});

test("app name with an apostrophe and a URL with &", () => {
  const url = "https://www.youtube.com/watch?v=abc&t=10";
  assert.ok(isValidUrl(url));
  runCase("Kid's TV", url);
});

test("shell syntax in the app name stays literal", () => {
  const home = runCase("$(touch pwned) `touch pwned2`", "https://example.com");
  assert.deepEqual(
    readdirSync(home).filter((f) => f.startsWith("pwned")),
    [],
  );
  assert.deepEqual(
    readdirSync(join(home, "Documents")).filter((f) => f.startsWith("pwned")),
    [],
  );
});

test("home folder option", () => {
  runCase("Netflix", "https://www.netflix.com", true);
});

test("app names that cannot be file names are rejected", () => {
  assert.equal(isValidAppName("Kid's TV"), true);
  assert.equal(isValidAppName("a/b"), false);
  assert.equal(isValidAppName("a\nb"), false);
  assert.equal(isValidAppName("   "), false);
});
