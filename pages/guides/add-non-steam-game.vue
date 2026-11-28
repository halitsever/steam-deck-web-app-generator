<script setup lang="ts">
const faq = [
  {
    q: "Does adding a non-Steam game let Steam update it?",
    a: "No. Valve's help page says it only adds a shortcut in the Steam client. Steam does not download updates for the game and does not treat it as proof of ownership.",
  },
  {
    q: "Where do non-Steam games show up on Steam Deck?",
    a: "In Game Mode, under the Non-Steam tab of your library. They launch like any other game.",
  },
  {
    q: "Can I add a website as a non-Steam game?",
    a: "Not directly, because a website is not a program in the list. This generator writes a small launcher that opens the site in Chrome and adds that launcher to Steam for you.",
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
</script>

<template>
  <GuidePage
    seo-title="How to Add Non-Steam Games to Steam and Steam Deck"
    description="How to add non-Steam games to Steam on Windows, Mac or Linux and on Steam Deck, using Valve's steps, plus how to add a website as a non-Steam game."
    heading="Add a non-Steam game to Steam or Steam Deck"
    eyebrow="ADD NON-STEAM GAME"
  >
    <p class="guide-lead">
      A non-Steam game is any program you add to your Steam library yourself instead of buying it on Steam. It can be a game from another store, an emulator, an app, a browser or a script. Once added, it launches from
      your library like any other game.
    </p>

    <h2>On a PC: the Steam client</h2>
    <p>
      Valve's help page
      <a href="https://help.steampowered.com/en/faqs/view/4B8B-9697-2338-40EC" target="_blank" rel="noreferrer">Add Non-Steam Games to a Library</a>
      gives these steps for the Steam client:
    </p>
    <ol class="guide-steps">
      <li>Launch Steam.</li>
      <li>Click the <strong>Games</strong> menu and choose <strong>Add a Non-Steam Game to My Library</strong>.</li>
      <li>Put a check next to the programs you want, or use <strong>Browse</strong> to find one on your computer.</li>
      <li>Click <strong>Add Selected Programs</strong>.</li>
    </ol>
    <p>The same page notes that this only adds a shortcut. Steam will not download updates for the game, and the shortcut does not count as proof that you own it.</p>

    <h2>On Steam Deck: from Desktop Mode</h2>
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
    <p>If the app you want is a browser, the <NuxtLink to="/guides/install-chrome-steam-deck">Chrome on Steam Deck guide</NuxtLink> walks through that case.</p>

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

    <h2>Questions</h2>
    <template v-for="f in faq" :key="f.q">
      <h3>{{ f.q }}</h3>
      <p>{{ f.a }}</p>
    </template>
  </GuidePage>
</template>
