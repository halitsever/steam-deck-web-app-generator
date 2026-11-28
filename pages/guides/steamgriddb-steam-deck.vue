<script setup lang="ts">
const faq = [
  {
    q: "What is SteamGridDB Boop?",
    a: "SGDBoop is SteamGridDB's small helper app. Once installed, buttons on the SteamGridDB website apply an image straight to a game or non-Steam shortcut in your Steam library, so you do not download and set it by hand.",
  },
  {
    q: "Does SGDBoop work on Steam Deck?",
    a: "Yes, in Desktop Mode. SGDBoop is on Flathub as com.steamgriddb.SGDBoop, which the Discover Software Center installs. On Linux, SteamGridDB says you may need to restart Steam before the new art appears.",
  },
  {
    q: "Is SteamGridDB made by Valve?",
    a: "No. SteamGridDB states that it is not affiliated with Valve Corporation or the Steam platform. Decky Loader, which runs the SteamGridDB plugin in Game Mode, is also a community project.",
  },
  {
    q: "Can I change the artwork of a non-Steam game?",
    a: "Yes. Both SGDBoop and the Decky Loader plugin list non-Steam shortcuts, so a website shortcut made with this generator can get a cover, hero image, logo and icon like any game.",
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
    seo-title="SteamGridDB on Steam Deck: Boop and the Decky Plugin"
    description="Give non-Steam shortcuts on Steam Deck real artwork from SteamGridDB, with SGDBoop in Desktop Mode or the Decky Loader plugin in Game Mode, step by step."
    heading="Custom artwork for Steam Deck shortcuts with SteamGridDB"
    eyebrow="STEAMGRIDDB"
    published="2026-11-28"
  >
    <p class="guide-lead">
      A website you add with this generator shows up in your library without artwork, under a name like <code>YouTube.sh</code>. SteamGridDB, a community site of game artwork, can turn it into a proper cover with a
      background and logo. There are two ways to apply that art on a Steam Deck: SGDBoop from Desktop Mode, or the SteamGridDB plugin for Decky Loader in Game Mode.
    </p>

    <h2>What SteamGridDB is</h2>
    <p>
      <a href="https://www.steamgriddb.com/" target="_blank" rel="noreferrer">SteamGridDB</a>
      collects user-uploaded images in the formats the Steam library uses: grids (the covers), heroes (the wide banner at the top of a game page), logos and icons. It says on every page that it is not affiliated with
      Valve or Steam. Before you pick art, rename your shortcut in its Properties in Steam, for example from <code>YouTube.sh</code> to <code>YouTube</code>, so the library looks right.
    </p>

    <h2>Option 1: SGDBoop in Desktop Mode</h2>
    <p>
      SGDBoop is SteamGridDB's helper app. Its <a href="https://www.steamgriddb.com/boop" target="_blank" rel="noreferrer">Boop page</a> describes it as a tool that applies assets from SteamGridDB directly to your Steam
      library with one click.
    </p>
    <ol class="guide-steps">
      <li>Switch to Desktop Mode (STEAM, Power, Switch to Desktop). See the <NuxtLink to="/guides/steam-deck-desktop-mode">Desktop Mode guide</NuxtLink> for the controls.</li>
      <li>
        Open the Discover Software Center and install <strong>SGDBoop</strong>. It comes from
        <a href="https://flathub.org/apps/com.steamgriddb.SGDBoop" target="_blank" rel="noreferrer">Flathub</a>
        as <code>com.steamgriddb.SGDBoop</code>.
      </li>
      <li>In a browser on the desktop, open steamgriddb.com/boop and log in if asked. Use the test button there: the browser asks whether to open <code>sgdb://</code> links with SGDBoop. Allow it.</li>
      <li>Flip the switch on the same page to show the Boop buttons while you browse SteamGridDB.</li>
      <li>Find the art you want, hover over it and use the button for non-Steam apps. SGDBoop asks which of your non-Steam shortcuts it is for.</li>
      <li>Restart Steam. SteamGridDB notes that on Linux you may need a restart before the art appears, and that icons always need one.</li>
    </ol>
    <p>If nothing changes, SteamGridDB's troubleshooting is to exit Steam completely from its menu and start it again, and to run the test button once more to check the browser still hands links to SGDBoop.</p>

    <h2>Option 2: the SteamGridDB plugin for Decky Loader</h2>
    <p>
      Decky Loader is a community plugin loader for Steam Deck's Game Mode, not a Valve product. Its
      <a href="https://github.com/SteamGridDB/decky-steamgriddb" target="_blank" rel="noreferrer">SteamGridDB plugin</a>
      lets you browse and apply art without leaving Game Mode. From the plugin's README:
    </p>
    <ol class="guide-steps">
      <li>Install Decky Loader by following <a href="https://wiki.deckbrew.xyz/en/user-guide/install" target="_blank" rel="noreferrer">its install guide</a>.</li>
      <li>Open the Quick Access menu, open Decky's Plugins Browser, find <strong>SteamGridDB</strong> and press Install.</li>
      <li>In your library, focus the shortcut, press the Start button (or the cog on its game page) and choose <strong>Change Artwork...</strong>.</li>
    </ol>
    <p>The README lists support for non-Steam shortcuts, changing icons, and picking images from local files as well as from SteamGridDB.</p>
    <p>
      If something in Game Mode misbehaves after you add plugins, Valve's
      <a href="https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28" target="_blank" rel="noreferrer">troubleshooting guide</a>
      asks you to exit or disable third-party applications installed through Desktop Mode and test again.
    </p>

    <h2>Which way to choose</h2>
    <ul>
      <li><strong>SGDBoop</strong> is one app from Discover and changes nothing in Game Mode itself. You pick art in a desktop browser.</li>
      <li><strong>The Decky plugin</strong> works from the couch in Game Mode, but it needs Decky Loader, a third-party add-on.</li>
    </ul>
    <p>You can also set art by hand in the Steam desktop client by right-clicking a library tile, if you have already downloaded the images.</p>

    <h2>Make a shortcut worth decorating</h2>
    <p>No shortcut yet? The generator turns any website into a non-Steam game that opens full screen in Chrome:</p>
    <GuideSteps url="https://www.youtube.com" name="YouTube" />

    <h2>Questions</h2>
    <template v-for="f in faq" :key="f.q">
      <h3>{{ f.q }}</h3>
      <p>{{ f.a }}</p>
    </template>
  </GuidePage>
</template>
