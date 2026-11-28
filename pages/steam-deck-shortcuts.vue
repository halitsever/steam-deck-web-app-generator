<script setup lang="ts">
interface Row {
  keys: string[];
  action: string;
  /** Word between keys: "+" for a chord, "then" for a menu path. */
  join?: string;
}
interface Group {
  id: string;
  title: string;
  intro: string;
  rows: Row[];
  source: { label: string; href: string };
}

const BASIC = { label: "Steam Deck Basic Use & Troubleshooting Guide", href: "https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28" };
const DESKTOP = { label: "Steam Deck Desktop FAQ", href: "https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C" };

/** Only combos Valve documents in its help pages; the full on-device list appears when you hold STEAM. */
const groups: Group[] = [
  {
    id: "game-mode",
    title: "Game Mode",
    intro: "Steam Deck shows every combo it supports when you hold the STEAM button. These are the ones Valve's help pages spell out.",
    rows: [
      { keys: ["STEAM", "X"], action: "On-screen keyboard" },
      { keys: ["Hold STEAM"], action: "Show the list of all available shortcuts" },
      { keys: ["STEAM", "Power", "Switch to Desktop"], action: "Go to Desktop Mode", join: "then" },
      { keys: ["STEAM", "Power", "Restart"], action: "Restart the Deck", join: "then" },
      { keys: ["A on a game", "Gamepad icon"], action: "Controller settings for that game", join: "then" },
    ],
    source: BASIC,
  },
  {
    id: "power",
    title: "Power and recovery",
    intro: "Held button times differ between the LCD and OLED models.",
    rows: [
      { keys: ["Hold Power 4 s (LCD) or 7 s (OLED)"], action: "Force a restart when the Deck is on but not responding" },
      { keys: ["Hold Power 10 s (LCD) or 16 s (OLED)"], action: "Try this if it is still unresponsive" },
      { keys: ["Hold Power 7 s (OLED)"], action: "Power on a new OLED model out of the box" },
      { keys: ["Hold Volume +", "Press Power"], action: "Boot into the BIOS menu from a powered-off Deck", join: "and" },
    ],
    source: BASIC,
  },
  {
    id: "desktop-mode",
    title: "Desktop Mode",
    intro: "On the desktop, the controls act as a mouse. Steam has to be running for STEAM + X to work.",
    rows: [
      { keys: ["Right trackpad"], action: "Move the pointer" },
      { keys: ["R2"], action: "Left-click" },
      { keys: ["L2"], action: "Right-click" },
      { keys: ["Click right trackpad"], action: "Primary click" },
      { keys: ["Click left trackpad"], action: "Secondary click" },
      { keys: ["STEAM", "X"], action: "On-screen keyboard while Steam is running" },
      { keys: ["Return to Gaming Mode"], action: "Desktop link back to Game Mode" },
    ],
    source: DESKTOP,
  },
  {
    id: "keyboard",
    title: "Steam keyboard shortcuts",
    intro: "Defaults in Steam when a keyboard is connected. Shift + Tab and F12 come from Valve's Steamworks overlay and screenshot docs; the shortcut keys can be changed on desktop and on Steam Deck.",
    rows: [
      { keys: ["Shift", "Tab"], action: "Open the Steam overlay in a game" },
      { keys: ["F12"], action: "Take a screenshot" },
      { keys: ["Ctrl", "F12"], action: "Drop a marker on the game recording timeline" },
    ],
    source: { label: "Steam Game Recording FAQ", href: "https://help.steampowered.com/en/faqs/view/23B7-49AD-4A28-9590" },
  },
];

const description = "The Steam Deck keyboard shortcut is STEAM + X. A printable cheat sheet of the button combos, power holds and desktop mode controls Valve documents.";

useSeoMeta({
  title: "Steam Deck Keyboard Shortcut and Button Combos",
  ogTitle: "Steam Deck Keyboard Shortcut and Button Combos",
  description,
  ogDescription: description,
});

const faq = [
  {
    q: "What is the Steam Deck keyboard shortcut?",
    a: "Press STEAM + X to bring up the on-screen keyboard. It works in Game Mode and in Desktop Mode as long as Steam is running.",
  },
  {
    q: "Why is the Steam Deck keyboard shortcut not working?",
    a: "In Desktop Mode, STEAM + X only works while Steam is running, so start Steam first. Valve's Desktop FAQ also says the desktop keyboard is still being improved and some situations need a physical keyboard and mouse.",
  },
  {
    q: "How do I see every Steam Deck shortcut?",
    a: "Hold the STEAM button. The Deck shows the list of all available shortcuts for your SteamOS version.",
  },
];

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    },
  ],
});

function printSheet() {
  window.print();
}
</script>

<template>
  <div class="shortcuts-layout">
    <article class="panel guide-panel shortcuts-sheet">
      <header class="panel-header">
        <div class="panel-eyebrow">
          <span class="dot" aria-hidden="true" />
          CHEAT SHEET
        </div>
        <h1>Steam Deck shortcuts cheat sheet</h1>
        <p class="panel-sub">STEAM + X opens the keyboard. Below are the other combos, power holds and desktop controls from Valve's help pages, on one page you can print.</p>
      </header>

      <div class="guide-body">
        <section v-for="g in groups" :id="g.id" :key="g.id" class="shortcut-group">
          <h2>{{ g.title }}</h2>
          <p>{{ g.intro }}</p>
          <table class="shortcut-table">
            <thead>
              <tr>
                <th scope="col">Press</th>
                <th scope="col">What it does</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in g.rows" :key="g.id + r.action">
                <th scope="row">
                  <template v-for="(k, i) in r.keys" :key="k">
                    <span v-if="i > 0" class="kbd-join">{{ r.join ?? "+" }}</span>
                    <kbd>{{ k }}</kbd>
                  </template>
                </th>
                <td>{{ r.action }}</td>
              </tr>
            </tbody>
          </table>
          <p class="shortcut-source">
            Source: <a :href="g.source.href" target="_blank" rel="noreferrer">{{ g.source.label }}</a>
          </p>
        </section>

        <h2>Keyboard shortcut not working?</h2>
        <ul>
          <li>In Desktop Mode, start Steam first. Valve's FAQ says STEAM + X brings up the keyboard <strong>while Steam is running</strong>.</li>
          <li>Valve also says it is still improving the desktop keyboard, and some situations need a physical keyboard and mouse plugged in.</li>
          <li>Hold STEAM to see the combos your SteamOS version supports right now.</li>
          <li>If buttons seem wrong in general, run <strong>Steam &gt; Settings &gt; Controller &gt; Test Controller Inputs</strong>, and exit it with a long press of B.</li>
        </ul>

        <h2>Questions</h2>
        <template v-for="f in faq" :key="f.q">
          <h3>{{ f.q }}</h3>
          <p>{{ f.a }}</p>
        </template>
        <p class="shortcut-source">Checked against Valve's help pages on November 28, 2026. SteamOS updates can add or change combos.</p>
      </div>
    </article>

    <aside class="panel shortcuts-aside no-print" aria-label="Steam Deck tools">
      <h2>Put a website in Game Mode</h2>
      <p>The generator writes a script that adds any website to your Steam library as a non-Steam game, opening full screen in Chrome.</p>
      <NuxtLink class="cta guide-cta" to="/"><span class="cta-label">OPEN THE GENERATOR</span></NuxtLink>
      <ul class="guide-links">
        <li><NuxtLink to="/guides/install-chrome-steam-deck">Install Chrome on Steam Deck</NuxtLink></li>
        <li><NuxtLink to="/guides/add-non-steam-game">Add a non-Steam game</NuxtLink></li>
        <li><NuxtLink to="/guides/steam-deck-web-browser">Web browser in Game Mode</NuxtLink></li>
      </ul>
      <button type="button" class="print-btn" @click="printSheet">
        <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true">
          <path d="M7 9V3h10v6M7 17H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-2M7 14h10v7H7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
        </svg>
        Print this sheet
      </button>
    </aside>
  </div>
</template>
