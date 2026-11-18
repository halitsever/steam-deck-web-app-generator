<template>
  <GuidePage
    seo-title="How to Add a Non-Steam Game on Steam Deck"
    description="Add a non-Steam game to your Steam Deck library from Desktop Mode, using Valve's steps. Also how this generator adds a website as a non-Steam game with one script."
    heading="How to add a non-Steam game on Steam Deck"
    eyebrow="ADD NON-STEAM GAME"
  >
    <p class="guide-lead">
      A non-Steam game is any program you add to your Steam library yourself instead of buying it on Steam. Once added, it sits under the Non-Steam tab in Game Mode and launches like any other game. It can be a game, an
      app, a browser or a script.
    </p>

    <h2>Valve's steps</h2>
    <p>
      From Valve's
      <a href="https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C" target="_blank" rel="noreferrer">Steam Deck Desktop FAQ</a>:
    </p>
    <ol class="guide-steps">
      <li>From the STEAM menu, select Power, then <strong>Switch to Desktop</strong>.</li>
      <li>Install the app you want, for example from the Discover Software Center.</li>
      <li>Open the Steam client and click <strong>Add a Game</strong> in the lower left corner, then <strong>Add a Non-Steam Game</strong>.</li>
      <li>Find the application in the list and add it.</li>
      <li>Select <strong>Return to Gaming Mode</strong>. The app shows up in your library under the <strong>Non-Steam</strong> tab.</li>
    </ol>

    <h2>Add a website as a non-Steam game</h2>
    <p>
      A website is not an installed app, so it does not appear in that list. The generator gets around this by writing a small launcher script that opens the site in Chrome, then adding the script to Steam with
      <code>steamos-add-to-steam</code>. You run one file in Desktop Mode and the shortcut is in your library when you go back to Game Mode.
    </p>
    <GuideSteps url="https://example.com" name="ExampleSite" />

    <h2>If the shortcut does not appear</h2>
    <p>
      You can add the launcher by hand with Valve's steps above. In the Add a Non-Steam Game window, use <strong>Browse</strong> to pick <code>~/Documents/ExampleSite.sh</code> (or whatever you called it) and add it.
    </p>
  </GuidePage>
</template>
