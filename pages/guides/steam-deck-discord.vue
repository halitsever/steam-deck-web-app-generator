<script setup lang="ts">
const faq = [
  {
    q: "Can you use Discord on Steam Deck?",
    a: "Yes. Install the Discord app from the Discover Software Center in Desktop Mode and add it to Steam as a non-Steam game, or open discord.com/app in Chrome. Both run in Game Mode next to a game.",
  },
  {
    q: "How do I get Discord in Game Mode?",
    a: "After installing it in Desktop Mode, open Steam on the desktop, choose Add a Game, then Add a Non-Steam Game, tick Discord and add it. It appears in your library under Non-Steam.",
  },
  {
    q: "Can I talk on Discord while playing a game on Steam Deck?",
    a: "Yes. Valve says you can run a desktop app at the same time as a game: start Discord, join the voice channel, then launch the game from your library and switch between them with the STEAM button.",
  },
  {
    q: "Why does Discord show no game activity on Steam Deck?",
    a: "Flathub notes that the Discord flatpak runs in a sandbox, and that the sandbox stops Game Activity and Rich Presence from working out of the box.",
  },
  {
    q: "Why can't my friends hear me on Discord on a Steam Deck LCD?",
    a: "Valve says the built-in microphone on the LCD model is unavailable while something is plugged into the 3.5mm jack. Use a headset with its own mic. On the OLED model, the built-in mic works alongside the jack.",
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
    seo-title="Discord on Steam Deck: Install It and Use It in Game Mode"
    description="How to get Discord on Steam Deck: the Discord app from Discover or discord.com in Chrome, adding it to Game Mode, voice chat while gaming, and the mic quirks."
    heading="How to install Discord on Steam Deck and keep it open while you play"
    eyebrow="DISCORD ON STEAM DECK"
    published="2026-11-28"
  >
    <p class="guide-lead">
      Steam Deck does not come with Discord, but there are two ways to add it: the Discord desktop app from the Discover Software Center, or Discord's web app in Chrome. Either one can sit in your Game Mode library and
      run next to a game, so you can stay in a voice channel while you play.
    </p>

    <h2>Option 1: the Discord app from Discover</h2>
    <ol class="guide-steps">
      <li>Press STEAM, open <strong>Power</strong> and choose <strong>Switch to Desktop</strong>. The <NuxtLink to="/guides/steam-deck-desktop-mode">Desktop Mode guide</NuxtLink> covers the controls.</li>
      <li>Open the <strong>Discover Software Center</strong> from the taskbar, search for <strong>Discord</strong> and press <strong>Install</strong>.</li>
      <li>Open Discord once on the desktop and sign in. Press STEAM + X for the on-screen keyboard.</li>
      <li>Open the Steam client, click <strong>Add a Game</strong>, then <strong>Add a Non-Steam Game</strong>, tick <strong>Discord</strong> and click <strong>Add Selected Programs</strong>.</li>
      <li>Double-click <strong>Return to Gaming Mode</strong>. Discord is in your library under <strong>Non-Steam</strong>.</li>
    </ol>
    <p>
      Discover installs Discord from
      <a href="https://flathub.org/apps/com.discordapp.Discord" target="_blank" rel="noreferrer">Flathub</a>
      as the flatpak <code>com.discordapp.Discord</code>, with Discord Inc. listed as its developer. Flathub's page also says the flatpak runs in a sandbox, and that the sandbox stops three features from working out of
      the box: Game Activity, unrestricted file access and Rich Presence. So your friends may not see which game you are playing, and you may only reach some folders when you attach a file.
    </p>
    <p>
      Keep one more thing in mind: Discord's own
      <a href="https://support.discord.com/hc/en-us/articles/213491697" target="_blank" rel="noreferrer">system requirements</a>
      list Ubuntu, Debian, openSUSE and Fedora as its supported Linux systems. SteamOS is not on that list, so Discord's support team may not help with Deck-specific problems.
    </p>

    <h2>Option 2: Discord in Chrome with the generator</h2>
    <p>
      Discord also runs in a browser at <code>discord.com/app</code>, and its requirements page lists Google Chrome 108 or later. This site's generator turns that address into a Game Mode shortcut that opens Discord full
      screen in Chrome. You need the Chrome flatpak from Discover first; see <NuxtLink to="/guides/install-chrome-steam-deck">installing Chrome on Steam Deck</NuxtLink>.
    </p>
    <GuideSteps url="https://discord.com/app" name="Discord" />
    <p>
      Before you use it for voice, open <code>discord.com/app</code> once in Chrome on the desktop, sign in and join a voice channel so Chrome asks for microphone access. Allow it. The shortcut shares that Chrome
      profile, so it starts signed in and with the permission already given.
    </p>

    <h2>Which one to pick</h2>
    <table class="guide-table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Discord app (flatpak)</th>
          <th scope="col">Discord in Chrome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Install</th>
          <td>Discord from Discover</td>
          <td>Chrome from Discover, then the generator</td>
        </tr>
        <tr>
          <th scope="row">Game Activity, Rich Presence</th>
          <td>Blocked by the sandbox out of the box, per Flathub</td>
          <td>Not available in a browser tab</td>
        </tr>
        <tr>
          <th scope="row">Updates</th>
          <td>Through Discover</td>
          <td>Discord updates the web app, Chrome updates through Discover</td>
        </tr>
        <tr>
          <th scope="row">Opens as</th>
          <td>The desktop app window</td>
          <td>Full screen, no tabs or address bar</td>
        </tr>
      </tbody>
    </table>
    <p>If you already use Chrome on the Deck for other shortcuts, the web version adds nothing new to install. If you want Discord's own app and its notifications, use the flatpak.</p>

    <h2>Voice chat while you play</h2>
    <p>
      Valve's
      <a href="https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C" target="_blank" rel="noreferrer">Desktop FAQ</a>
      says you can run a desktop app at the same time as a Steam game, and names chatting with friends as one of the uses. In Game Mode:
    </p>
    <ol class="guide-steps">
      <li>Launch Discord from your library and join the voice channel.</li>
      <li>Press the <strong>STEAM</strong> button, go to your library and launch the game.</li>
      <li>Both now appear in the left-hand menu when you press STEAM. Use it to switch back to Discord, for example to mute or change channels.</li>
    </ol>

    <h2>Microphone and sound</h2>
    <p>
      From Valve's
      <a href="https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28" target="_blank" rel="noreferrer">Basic Use &amp; Troubleshooting Guide</a>:
    </p>
    <ul>
      <li>On the <strong>Steam Deck LCD</strong>, the built-in microphone is unavailable while a plug is in the 3.5mm jack. Use headphones with a built-in mic if you want voice over the jack.</li>
      <li>On the <strong>Steam Deck OLED</strong>, the built-in mic works at the same time as the 3.5mm jack.</li>
      <li>With a <strong>Bluetooth</strong> headset, the built-in microphone stays available.</li>
      <li>If there is no sound from the speakers, Valve suggests checking that no other audio device is connected over Bluetooth, USB-C or the jack, then switching to a different output and back to the speakers.</li>
    </ul>
    <p>Inside Discord, its voice settings let you pick the input and output device. If friends cannot hear you, check that the input there matches the microphone you are actually using.</p>

    <h2>Questions</h2>
    <template v-for="f in faq" :key="f.q">
      <h3>{{ f.q }}</h3>
      <p>{{ f.a }}</p>
    </template>
  </GuidePage>
</template>
