<script setup lang="ts">
const faq = [
  {
    q: "Can you get Spotify on Steam Deck?",
    a: "Yes. Install Spotify from the Discover Software Center in Desktop Mode, or use Spotify's web player at open.spotify.com in Chrome. Either can be added to the Game Mode library.",
  },
  {
    q: "Can I listen to Spotify while playing a game on Steam Deck?",
    a: "Yes. Valve says you can run a desktop app at the same time as a game and names listening to music as an example. Start Spotify, press play, then launch the game from your library.",
  },
  {
    q: "Is the Spotify app on Discover made by Spotify?",
    a: "No. Flathub labels the Spotify flatpak a community-provided package that is not verified by, affiliated with or supported by Spotify. Spotify also says on its own Linux page that Linux is not a platform it actively supports.",
  },
  {
    q: "Why does the Spotify web player say playback of protected content is not enabled?",
    a: "Spotify's help page says the web player needs protected content turned on. In Chrome, open chrome://settings/content, choose open.spotify.com and set Protected content IDs to Allow or Default.",
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
    seo-title="Spotify on Steam Deck: Music While You Play in Game Mode"
    description="How to get Spotify on Steam Deck, as the app from Discover or the web player in Chrome, add it to Game Mode and keep music playing while you play a game."
    heading="Listen to Spotify on Steam Deck while you play"
    eyebrow="SPOTIFY ON STEAM DECK"
    published="2026-11-28"
  >
    <p class="guide-lead">
      There is no Spotify button in Game Mode, but Spotify runs on the Deck in two ways: as a Linux app from the Discover Software Center, or as Spotify's web player in Chrome. Once either is in your library, you can
      start a playlist, launch a game and keep the music going.
    </p>

    <h2>Option 1: the Spotify app from Discover</h2>
    <ol class="guide-steps">
      <li>Press STEAM, open <strong>Power</strong> and choose <strong>Switch to Desktop</strong>. The <NuxtLink to="/guides/steam-deck-desktop-mode">Desktop Mode guide</NuxtLink> explains the controls.</li>
      <li>Open the <strong>Discover Software Center</strong>, search for <strong>Spotify</strong> and press <strong>Install</strong>.</li>
      <li>Open Spotify on the desktop once and log in. STEAM + X brings up the keyboard.</li>
      <li>In the Steam client, click <strong>Add a Game</strong>, then <strong>Add a Non-Steam Game</strong>, tick <strong>Spotify</strong> and click <strong>Add Selected Programs</strong>.</li>
      <li>Double-click <strong>Return to Gaming Mode</strong>. Spotify is in your library under <strong>Non-Steam</strong>.</li>
    </ol>
    <p>Two things to know about this version:</p>
    <ul>
      <li>
        <a href="https://flathub.org/apps/com.spotify.Client" target="_blank" rel="noreferrer">Flathub</a>
        labels the Spotify flatpak (<code>com.spotify.Client</code>) as community-provided: it is not verified by, affiliated with or supported by Spotify.
      </li>
      <li>
        Spotify's own
        <a href="https://www.spotify.com/us/download/linux/" target="_blank" rel="noreferrer">Linux download page</a>
        calls Spotify for Linux a spare-time project of its engineers and says Linux is not a platform Spotify actively supports, so the app may behave differently from the Windows and Mac versions.
      </li>
    </ul>

    <h2>Option 2: the Spotify web player in Chrome</h2>
    <p>
      Spotify's
      <a href="https://support.spotify.com/us/article/web-player-help/" target="_blank" rel="noreferrer">web player help page</a>
      lists Chrome, Firefox, Edge and Opera as supported desktop browsers. With the Chrome flatpak from Discover (see <NuxtLink to="/guides/install-chrome-steam-deck">installing Chrome on Steam Deck</NuxtLink>), the
      generator turns <code>open.spotify.com</code> into its own Game Mode shortcut that opens full screen:
    </p>
    <GuideSteps url="https://open.spotify.com" name="Spotify" />
    <p>
      If the web player shows a message that playback of protected content is not enabled, Spotify's help page gives the Chrome fix: open <code>chrome://settings/content</code>, select <code>open.spotify.com</code> and
      set <strong>Protected content IDs</strong> to Allow or Default. Do it once in Chrome on the desktop; the shortcut uses the same Chrome profile, so it keeps the setting and your login.
    </p>

    <h2>Music while you play</h2>
    <p>
      Valve's
      <a href="https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C" target="_blank" rel="noreferrer">Desktop FAQ</a>
      says you can run a desktop app at the same time as a game, and lists listening to music as one of the reasons to do it. In Game Mode:
    </p>
    <ol class="guide-steps">
      <li>Launch Spotify, or your Spotify shortcut, from the library and start a playlist.</li>
      <li>Press <strong>STEAM</strong>, go to your library and launch the game. The music keeps playing.</li>
      <li>To skip a track or pause, press STEAM. Spotify is in the left-hand menu next to the game.</li>
    </ol>
    <p>The game's own music plays on top of Spotify, so turn it down in the game's audio settings if the two clash.</p>

    <h2>App or web player?</h2>
    <ul>
      <li><strong>The app</strong> is one install from Discover and opens like any desktop program, but it is a community package of a client Spotify does not actively support on Linux.</li>
      <li><strong>The web player</strong> is on Spotify's supported browser list, needs Chrome plus one setting, and opens full screen without tabs or an address bar.</li>
    </ul>
    <p>Both play the same account. If one of them misbehaves after an update, the other is a quick fallback.</p>

    <h2>Questions</h2>
    <template v-for="f in faq" :key="f.q">
      <h3>{{ f.q }}</h3>
      <p>{{ f.a }}</p>
    </template>
  </GuidePage>
</template>
