<template>
  <GuidePage
    seo-title="Xbox Cloud Gaming on Steam Deck: Edge Setup or Chrome Shortcut"
    description="How to play Xbox Cloud Gaming on Steam Deck. Microsoft's official Edge setup, and how to add xbox.com/play to Game Mode as a Chrome shortcut with this generator."
    heading="Xbox Cloud Gaming on Steam Deck"
    eyebrow="STEAM DECK XBOX CLOUD GAMING"
  >
    <p class="guide-lead">
      Xbox Cloud Gaming runs in a browser at xbox.com/play. Microsoft publishes its own Steam Deck setup for it, built on Microsoft Edge, and for most people that is the better route. This page explains both.
    </p>

    <h2>The official route: Microsoft Edge</h2>
    <p>
      Microsoft's article
      <a href="https://support.microsoft.com/en-us/edge/xbox-cloud-gaming-in-microsoft-edge-with-steam-deck" target="_blank" rel="noreferrer">Xbox Cloud Gaming in Microsoft Edge with Steam Deck</a>
      walks through it. In short, you install Microsoft Edge from Discover in Desktop Mode, then give it access to the Deck's controls with:
    </p>
    <pre class="guide-code"><code>flatpak --user override --filesystem=/run/udev:ro com.microsoft.Edge</code></pre>
    <p>
      After that you add Edge to Steam, rename the shortcut, set launch options that open <code>https://www.xbox.com/play</code> in kiosk mode and apply the Gamepad with Mouse Trackpad controller template. Microsoft's
      page has the exact launch options and artwork.
    </p>
    <p>Use that route if you mostly play Xbox games. It is the setup Microsoft documents for the Deck, and it handles controller access, which this generator does not touch.</p>

    <h2>The quick route: a Chrome shortcut</h2>
    <p>
      If Chrome is already on your Deck and you would rather not install a second browser, the generator can add xbox.com/play to Game Mode as its own non-Steam game. Keep in mind that Microsoft's
      <a href="https://support.xbox.com/help/games-apps/cloud-gaming/supported_browsers" target="_blank" rel="noreferrer">list of supported browsers</a>
      covers Windows, macOS, ChromeOS, Android, iOS and iPadOS but not Linux, so Chrome on SteamOS is outside what Microsoft supports. If the game does not react to the Deck's buttons, switch to the Edge setup above.
    </p>
    <GuideSteps url="https://www.xbox.com/play" name="XboxCloudGaming" />
  </GuidePage>
</template>
