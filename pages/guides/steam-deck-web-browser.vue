<template>
  <GuidePage
    seo-title="How to Use a Web Browser in Steam Deck Game Mode"
    description="Get a web browser into Steam Deck Game Mode. Add Chrome to Steam as a non-Steam game for general browsing, or give a single website its own full-screen launcher."
    heading="Use a web browser in Steam Deck Game Mode"
    eyebrow="STEAM DECK WEB BROWSER"
  >
    <p class="guide-lead">
      To browse the web from Steam Deck Game Mode, you need a browser in your Steam library. There are two ways to get one there: add the whole browser as a non-Steam game, or add one website as its own launcher. They
      suit different jobs.
    </p>

    <h2>Add Chrome for general browsing</h2>
    <p>
      Valve's
      <a href="https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C" target="_blank" rel="noreferrer">Steam Deck Desktop FAQ</a>
      describes the steps for any desktop app:
    </p>
    <ol class="guide-steps">
      <li>From the STEAM menu, select Power, then <strong>Switch to Desktop</strong>.</li>
      <li>Install a browser such as Google Chrome from the Discover Software Center.</li>
      <li>Open the Steam client, click <strong>Add a Game</strong> in the lower left corner, then <strong>Add a Non-Steam Game</strong>, and pick the browser from the list.</li>
      <li>Select <strong>Return to Gaming Mode</strong> on the desktop. The browser now shows up in your library under <strong>Non-Steam</strong>.</li>
    </ol>
    <p>You get the full browser with tabs and an address bar. Valve's FAQ notes that <strong>STEAM + X</strong> brings up the on-screen keyboard while Steam is running, which you will need for typing addresses.</p>

    <h2>Add one website as its own launcher</h2>
    <p>
      For a site you open often, a dedicated shortcut is quicker: it lands straight on that site, full screen, with no browser bars in the way. That is what this generator makes. Each shortcut runs Chrome in kiosk mode
      for a single address, so you can have one for YouTube, one for Netflix and so on, each with its own entry in the library.
    </p>
    <GuideSteps url="https://example.com" name="ExampleSite" />
    <p>
      There are walkthroughs for specific services too:
      <NuxtLink to="/guides/steam-deck-youtube">YouTube</NuxtLink>, <NuxtLink to="/guides/steam-deck-netflix">Netflix</NuxtLink>, <NuxtLink to="/guides/steam-deck-xbox-cloud-gaming">Xbox Cloud Gaming</NuxtLink> and
      <NuxtLink to="/guides/steam-deck-geforce-now">GeForce NOW</NuxtLink>.
    </p>
  </GuidePage>
</template>
