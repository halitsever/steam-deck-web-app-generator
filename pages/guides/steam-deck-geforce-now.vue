<template>
  <GuidePage
    seo-title="GeForce NOW on Steam Deck: Official App or Browser Shortcut"
    description="How to get GeForce NOW on Steam Deck. Use NVIDIA's own Steam Deck installer, or add play.geforcenow.com to Game Mode as a Chrome shortcut with this generator."
    heading="GeForce NOW on Steam Deck"
    eyebrow="STEAM DECK GEFORCE NOW"
  >
    <p class="guide-lead">
      NVIDIA makes a GeForce NOW app for Steam Deck. If you want GeForce NOW on your Deck, install that app first. A browser shortcut made with this generator is a fallback, and this page explains why.
    </p>

    <h2>Install NVIDIA's GeForce NOW app</h2>
    <p>
      NVIDIA's support article
      <a href="https://nvidia.custhelp.com/app/answers/detail/a_id/5337" target="_blank" rel="noreferrer">How do I install GeForce NOW on Steam Deck?</a>
      covers the whole process. In short:
    </p>
    <ol class="guide-steps">
      <li>Switch to Desktop Mode (STEAM, Power, Switch to Desktop).</li>
      <li>Open <a href="https://www.nvidia.com/en-us/geforce-now/download/" target="_blank" rel="noreferrer">NVIDIA's download page</a> (gfn.link/download) on the Deck and download the Steam Deck installer.</li>
      <li>Run the installer from the file manager and follow its prompts. It adds GeForce NOW to your Steam library.</li>
      <li>Return to Gaming Mode and launch GeForce NOW from the Non-Steam section of your library.</li>
    </ol>
    <p>
      NVIDIA's article also suggests switching the shortcut's controller layout to Gamepad with Mouse Trackpad if you want to use the trackpad as a mouse, and restarting the app when you move between handheld and docked
      play.
    </p>

    <h2>Why not just use the browser?</h2>
    <p>
      GeForce NOW also runs in a browser at play.geforcenow.com, but NVIDIA's
      <a href="https://www.nvidia.com/en-us/geforce-now/system-reqs/" target="_blank" rel="noreferrer">system requirements</a>
      list Chrome on Windows, macOS and Chromebook only. Chrome on SteamOS is not on that list, while the Steam Deck app is. A Chrome shortcut may still help if the app will not install or you want a second way in, but
      expect the app to be the one NVIDIA supports.
    </p>

    <h2>Add play.geforcenow.com as a fallback</h2>
    <GuideSteps url="https://play.geforcenow.com" name="GeForce NOW" />
  </GuidePage>
</template>
