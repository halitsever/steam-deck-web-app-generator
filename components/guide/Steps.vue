<script setup lang="ts">
const props = defineProps<{
  url: string;
  name: string;
}>();

/** Same slug rule as useAppState, so the file name matches what the download button saves. */
const fileName = computed(
  () =>
    (props.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "") || "app") + ".sh",
);
</script>

<template>
  <ol class="guide-steps">
    <li>In Game Mode, press the STEAM button, open Power and choose <strong>Switch to Desktop</strong>.</li>
    <li>
      Install <strong>Google Chrome</strong> from the Discover Software Center if you don't have it yet. The generated script starts the Chrome flatpak (<code>com.google.Chrome</code>), which is the version Discover
      installs.
    </li>
    <li>
      Open the <NuxtLink to="/">generator</NuxtLink> in a browser on the Deck. Enter <code>{{ url }}</code> as the Site URL and <code>{{ name }}</code> as the App Name. Leave
      <strong>Use ~/Documents as default folder</strong> switched on.
    </li>
    <li>
      Press <strong>Generate script</strong>, then <strong>Download .sh</strong>. The file is saved as <code>{{ fileName }}</code>.
    </li>
    <li>
      Open Konsole in the folder you downloaded it to and run:
      <pre class="guide-code"><code>chmod +x {{ fileName }}
./{{ fileName }}</code></pre>
      The script writes a small launcher, <code>~/Documents/{{ name }}.sh</code>, makes it executable and hands it to <code>steamos-add-to-steam</code>, which adds it to your Steam library as a non-Steam game.
    </li>
    <li>
      Double-click <strong>Return to Gaming Mode</strong> on the desktop. The shortcut is in your Library under <strong>Non-Steam</strong>, listed as <code>{{ name }}.sh</code>. You can rename it in the shortcut's
      Properties.
    </li>
    <li>
      Launch it. Chrome opens <code>{{ url }}</code> full screen in kiosk mode, with no tabs, address bar or scrollbars. To close it, press STEAM and choose <strong>Exit Game</strong>.
    </li>
  </ol>

  <h2>Before you run it</h2>
  <ul>
    <li>
      Keep spaces and apostrophes out of the App Name. The script uses the name unquoted in two commands, so <code>Xbox Cloud Gaming</code> breaks it while <code>XboxCloudGaming</code> works. Rename the shortcut in Steam
      afterwards if you want a nicer label.
    </li>
    <li>
      Leave <code>~/Documents/{{ name }}.sh</code> where it is. The Steam shortcut points at that file.
    </li>
    <li>
      The launcher uses your normal Chrome profile, so a site you sign in to in Chrome on the desktop is still signed in when you open the shortcut in Game Mode. Inside Game Mode,
      <strong>STEAM + X</strong> brings up the on-screen keyboard.
    </li>
    <li>
      The script does not set a controller layout. Pick one in the shortcut's controller settings. Microsoft's and NVIDIA's own Steam Deck guides both use the
      <strong>Gamepad with Mouse Trackpad</strong> template for their browser and app shortcuts, which gives you a pointer on the trackpad.
    </li>
  </ul>
</template>
