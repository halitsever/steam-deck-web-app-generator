<script setup lang="ts">
const faq = [
  {
    q: "How do I get to Desktop Mode on Steam Deck?",
    a: "Press the STEAM button, open Power and choose Switch to Desktop. The Deck restarts the session into the KDE Plasma desktop.",
  },
  {
    q: "How do I exit Desktop Mode?",
    a: "Double-click Return to Gaming Mode on the desktop. Valve's Desktop FAQ says you can also log off through the system menus to get back.",
  },
  {
    q: "How do I right-click in Steam Deck Desktop Mode?",
    a: "Press L2, or click the left trackpad. R2 or a click on the right trackpad is a normal left click, and the right trackpad moves the pointer.",
  },
  {
    q: "How do I open the keyboard in Desktop Mode?",
    a: "Press STEAM + X. It only works while Steam is running, so start Steam first if it was closed. Valve says some situations still need a physical keyboard and mouse.",
  },
  {
    q: "Will a SteamOS update delete what I install in Desktop Mode?",
    a: "Apps from the Discover Software Center are flatpaks on the writable part of the drive, which Valve says future SteamOS updates will not break. Software installed outside flatpak, for example with pacman, may be wiped by the next update.",
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
    seo-title="Steam Deck Desktop Mode: How to Switch, Use and Exit"
    description="How to switch to Steam Deck Desktop Mode and back, use the trackpads, keyboard and right-click, install apps with Discover, and keep them safe from updates."
    heading="How to get into Desktop Mode on Steam Deck, and back out"
    eyebrow="STEAM DECK DESKTOP MODE"
    published="2026-11-28"
  >
    <p class="guide-lead">
      Game Mode is the Steam interface the Deck boots into. Desktop Mode is the full Linux desktop underneath it, where you install apps, manage files and run scripts. Valve's own help pages cover how to get there and
      back, and this guide puts those steps in one place.
    </p>

    <h2>How to switch to Desktop Mode</h2>
    <ol class="guide-steps">
      <li>Press the <strong>STEAM</strong> button.</li>
      <li>Open <strong>Power</strong>.</li>
      <li>Choose <strong>Switch to Desktop</strong>.</li>
    </ol>
    <p>
      The Deck closes Game Mode and opens a KDE Plasma desktop. Valve's
      <a href="https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28" target="_blank" rel="noreferrer">Basic Use &amp; Troubleshooting Guide</a>
      says that in Desktop Mode the Deck works like a normal PC: you can browse the internet, install applications and run programs outside of Steam. It is still SteamOS, which is based on Arch Linux, so anything you
      install has to support that distribution.
    </p>

    <h2>Controls on the desktop</h2>
    <p>Without a mouse and keyboard, the controller stands in for both. From Valve's guides:</p>
    <ul>
      <li><strong>Right trackpad</strong> moves the pointer.</li>
      <li><strong>R2</strong>, or a click on the right trackpad, is a left click.</li>
      <li><strong>L2</strong>, or a click on the left trackpad, is a right click.</li>
      <li><strong>STEAM + X</strong> opens the on-screen keyboard, but only while Steam is running.</li>
    </ul>
    <p>
      Valve's
      <a href="https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C" target="_blank" rel="noreferrer">Steam Deck Desktop FAQ</a>
      says the desktop keyboard is still being improved and that you may need to plug in a physical keyboard and mouse now and then. A Bluetooth keyboard pairs from Settings, Bluetooth. The same FAQ says desktop apps and
      games get the Deck's controls when Steam is running, so leave Steam open while you work. Every combo is on the
      <NuxtLink to="/steam-deck-shortcuts">Steam Deck shortcuts cheat sheet</NuxtLink>.
    </p>

    <h2>How to exit Desktop Mode</h2>
    <p>
      Double-click <strong>Return to Gaming Mode</strong>, the shortcut on the desktop. The Deck goes back to the normal Steam interface. If the shortcut is gone, Valve's FAQ says logging off through the system menus
      also brings you back.
    </p>

    <h2>Installing apps in Desktop Mode</h2>
    <p>
      The desktop comes with the <strong>Discover Software Center</strong> on the taskbar. Search for an app and press Install. Discover installs apps as flatpaks onto the writable part of the drive, which Valve says
      keeps them safe from future SteamOS updates. That is how you get a browser such as Google Chrome, a music app or a chat client; see
      <NuxtLink to="/guides/install-chrome-steam-deck">installing Chrome on Steam Deck</NuxtLink> for a full example.
    </p>
    <p>
      If you know the Linux command line, you can run <code>flatpak</code> commands in Konsole instead; the <NuxtLink to="/guides/steam-deck-terminal">terminal guide</NuxtLink> shows how to open it. Valve warns against
      going further than flatpak: software installed another way, for example with pacman, may be wiped by the next update, and making the system image writable with <code>sudo steamos-readonly disable</code> is only for
      people who know what they are doing.
    </p>

    <h2>Using sudo in Desktop Mode</h2>
    <p>
      The default <code>deck</code> user has no password, so <code>sudo</code> does not work out of the box. Valve's FAQ says to open a terminal and set one with <code>passwd</code>. The
      <NuxtLink to="/guides/steam-deck-sudo-password">Steam Deck sudo password guide</NuxtLink> walks through it, including what to do if you forget it. Most everyday tasks, including installing apps from Discover and
      running this generator's script, do not need sudo at all.
    </p>

    <h2>Bringing desktop apps into Game Mode</h2>
    <p>Anything you install on the desktop can launch from Game Mode once it is in your Steam library:</p>
    <ol class="guide-steps">
      <li>Open the Steam client on the desktop.</li>
      <li>Click <strong>Add a Game</strong> in the lower left corner, then <strong>Add a Non-Steam Game</strong>.</li>
      <li>Tick the app and click <strong>Add Selected Programs</strong>.</li>
      <li>Return to Gaming Mode. The app is in your library under <strong>Non-Steam</strong>.</li>
    </ol>
    <p>
      Valve also says you can run such an app at the same time as a game: press STEAM, go to your library, launch the other app, and switch between the two from the left-hand menu. The
      <NuxtLink to="/guides/add-non-steam-game">non-Steam game guide</NuxtLink> has more on how those shortcuts behave.
    </p>

    <h2>Adding a website instead of an app</h2>
    <p>
      A website is not a program, so it does not appear in the Add a Non-Steam Game list. This generator fills that gap: it writes a small launcher that opens one site full screen in Chrome and adds it to Steam. You run
      it once, in Desktop Mode, in Konsole:
    </p>
    <GuideSteps url="https://www.youtube.com" name="YouTube" />

    <h2>If something breaks after a desktop session</h2>
    <p>
      Valve's troubleshooting guide asks you to exit or disable any third-party applications installed through Desktop Mode and test again before anything else. If the Deck is in a bad state, its
      <a href="https://help.steampowered.com/en/faqs/view/1B71-EDF2-EB6D-2BB3" target="_blank" rel="noreferrer">SteamOS recovery page</a>
      lists the options, from rolling back to the previous OS version while keeping your data to a full factory reset.
    </p>

    <h2>Questions</h2>
    <template v-for="f in faq" :key="f.q">
      <h3>{{ f.q }}</h3>
      <p>{{ f.a }}</p>
    </template>
  </GuidePage>
</template>
