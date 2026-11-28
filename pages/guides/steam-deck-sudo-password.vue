<script setup lang="ts">
const faq = [
  {
    q: "What is the default sudo password on Steam Deck?",
    a: "There is none. Valve ships the default deck user with no password, which blocks ssh access and means sudo cannot be used until you set one with the passwd command.",
  },
  {
    q: "How do I set a sudo password on Steam Deck?",
    a: "Switch to Desktop Mode, open Konsole, type passwd and press Enter, then type the new password twice. Nothing appears on screen while you type it. After that, sudo accepts that password.",
  },
  {
    q: "How do I change my Steam Deck password?",
    a: "Run passwd again in Konsole. It asks for the current password first, then the new one twice.",
  },
  {
    q: "I forgot my Steam Deck sudo password. What now?",
    a: "Valve does not document a way to recover it. Its SteamOS recovery page lists a Factory Reset, which clears all local data and reinstalls Steam, and a full re-image. Write the password down so you do not need either.",
  },
  {
    q: "Do I need a sudo password to install apps?",
    a: "No. The Discover Software Center installs flatpak apps without it, and this site's generator script does not use sudo either.",
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
    seo-title="Steam Deck Sudo Password: Set, Change or Reset It"
    description="The Steam Deck has no default sudo password. How to set one with passwd in Konsole, change it, when you need it, and what Valve offers if you forget it."
    heading="Setting a sudo password on Steam Deck"
    eyebrow="STEAM DECK SUDO PASSWORD"
    published="2026-11-28"
  >
    <p class="guide-lead">
      If a guide tells you to run a command with <code>sudo</code> and Konsole asks for a password you never set, this is why: the Steam Deck ships without one. You create it yourself, once, with one command.
    </p>

    <h2>Why there is no default password</h2>
    <p>
      Valve's
      <a href="https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C" target="_blank" rel="noreferrer">Steam Deck Desktop FAQ</a>
      says the default <code>deck</code> user is shipped with no password. Valve calls that a secure setting: with no password, nobody can log in over ssh, and nothing can run through <code>sudo</code>. So there is no
      factory password to look up.
    </p>

    <h2>How to set the sudo password</h2>
    <ol class="guide-steps">
      <li>Press STEAM, open <strong>Power</strong> and choose <strong>Switch to Desktop</strong>. The <NuxtLink to="/guides/steam-deck-desktop-mode">Desktop Mode guide</NuxtLink> covers the controls.</li>
      <li>Open <strong>Konsole</strong> from the application menu in the lower left corner. Press STEAM + X if you need the keyboard.</li>
      <li>Type the command below and press Enter.</li>
    </ol>
    <pre class="guide-code"><code>passwd</code></pre>
    <ol class="guide-steps" start="4">
      <li>Type a new password and press Enter. Konsole shows nothing while you type, not even dots. That is normal.</li>
      <li>Type it again to confirm. Konsole confirms the change.</li>
    </ol>
    <p>
      From then on, <code>sudo</code> asks for this password. Valve's FAQ puts it simply: after setting it you can use sudo anywhere elevation is required. Pick something you will remember, and store it somewhere safe.
    </p>

    <h2>How to change it later</h2>
    <p>Run <code>passwd</code> again. Once a password exists, the command asks for the current one before it accepts a new one.</p>

    <h2>If you forgot the password</h2>
    <p>
      Valve's documentation does not describe a way to recover or reset a forgotten <code>deck</code> password. The tools it does document are on its
      <a href="https://help.steampowered.com/en/faqs/view/1B71-EDF2-EB6D-2BB3" target="_blank" rel="noreferrer">SteamOS recovery page</a>:
    </p>
    <ul>
      <li><strong>Factory Reset</strong>, under STEAM, Settings, System. It clears all local data, including installed games, and reinstalls Steam and SteamOS.</li>
      <li><strong>Re-imaging SteamOS</strong> from a recovery image, which wipes everything on the device.</li>
    </ul>
    <p>Both remove far more than a password, and games will need to download again. If you only wanted sudo for one task, check first whether you need it at all: most things people do in Desktop Mode work without it.</p>

    <h2>When you actually need sudo</h2>
    <p>You do not need a password for:</p>
    <ul>
      <li>installing apps from the Discover Software Center, or with <code>flatpak install</code> as your own user,</li>
      <li>adding programs to Steam as non-Steam games,</li>
      <li>running this site's generated script, which writes a launcher to your Documents folder and calls <code>steamos-add-to-steam</code> as the deck user.</li>
    </ul>
    <p>
      Changes to the system itself are what need it. Valve's example is <code>sudo steamos-readonly disable</code>, which makes the read-only system image writable, and it wraps that example in warnings: be careful with
      commands and scripts you find online, and expect anything installed outside flatpak, for example with pacman, to be wiped by the next SteamOS update.
    </p>

    <h2>Using the generator without sudo</h2>
    <p>The generator turns a website into a Game Mode shortcut that opens in Chrome. Every step runs as the normal deck user:</p>
    <GuideSteps url="https://www.youtube.com" name="YouTube" />

    <h2>Questions</h2>
    <template v-for="f in faq" :key="f.q">
      <h3>{{ f.q }}</h3>
      <p>{{ f.a }}</p>
    </template>
  </GuidePage>
</template>
