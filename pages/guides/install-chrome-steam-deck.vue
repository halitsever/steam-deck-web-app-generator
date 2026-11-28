<script setup lang="ts">
const faq = [
  {
    q: "Can you install Chrome on Steam Deck?",
    a: "Yes. Switch to Desktop Mode and install Google Chrome from the Discover Software Center. Discover installs it as a flatpak from Flathub.",
  },
  {
    q: "Will a SteamOS update remove Chrome?",
    a: "Valve's Desktop FAQ says flatpak apps install onto the writable part of the drive so that future SteamOS updates do not break them. Software installed outside flatpak, for example with pacman, may be wiped by an update.",
  },
  {
    q: "Is the Chrome flatpak made by Google?",
    a: "No. Flathub labels it a community-provided package that is not verified by, affiliated with, or supported by Google. It is the version Discover installs and the one this generator's shortcuts start.",
  },
  {
    q: "How do I type in Chrome in Game Mode?",
    a: "Press STEAM + X to bring up the on-screen keyboard while Steam is running.",
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
    seo-title="How to Install Chrome on Steam Deck and Add It to Game Mode"
    description="How to install Google Chrome on Steam Deck from Discover, add it to Game Mode as a non-Steam game, and give single websites their own Chrome shortcuts."
    heading="Install Google Chrome on Steam Deck"
    eyebrow="CHROME ON STEAM DECK"
  >
    <p class="guide-lead">
      Steam Deck does not come with Chrome, but it takes a few minutes to add. You install it once in Desktop Mode, then add it to your library so it opens from Game Mode like a game. After that, the generator can turn
      any website into its own Chrome shortcut.
    </p>

    <h2>1. Switch to Desktop Mode</h2>
    <p>Press the STEAM button, open <strong>Power</strong> and choose <strong>Switch to Desktop</strong>. On the desktop, the right trackpad moves the pointer, R2 is left-click and L2 is right-click.</p>

    <h2>2. Install Chrome from Discover</h2>
    <ol class="guide-steps">
      <li>Open the <strong>Discover Software Center</strong> from the taskbar.</li>
      <li>Search for <strong>Google Chrome</strong> and press <strong>Install</strong>. Press STEAM + X if you need the on-screen keyboard.</li>
    </ol>
    <p>
      Valve's
      <a href="https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C" target="_blank" rel="noreferrer">Steam Deck Desktop FAQ</a>
      explains that Discover installs apps as flatpaks onto the writable part of the drive, so SteamOS updates do not break them. The Chrome package comes from
      <a href="https://flathub.org/apps/com.google.Chrome" target="_blank" rel="noreferrer">Flathub</a> as <code>com.google.Chrome</code>. Flathub marks it as community-provided: it is not verified by, affiliated with or
      supported by Google.
    </p>

    <h2>3. Add Chrome to Game Mode</h2>
    <ol class="guide-steps">
      <li>Open the Steam client on the desktop.</li>
      <li>Click <strong>Add a Game</strong> in the lower left corner, then <strong>Add a Non-Steam Game</strong>.</li>
      <li>Tick <strong>Google Chrome</strong> in the list and click <strong>Add Selected Programs</strong>.</li>
      <li>Double-click <strong>Return to Gaming Mode</strong> on the desktop. Chrome is in your library under <strong>Non-Steam</strong>.</li>
    </ol>
    <p>
      In Game Mode, press <strong>STEAM + X</strong> for the on-screen keyboard. For a pointer on the trackpad, pick a controller layout in the shortcut's controller settings; Microsoft's and NVIDIA's Steam Deck guides
      use the <strong>Gamepad with Mouse Trackpad</strong> template for their browser shortcuts. The <NuxtLink to="/guides/steam-deck-web-browser">web browser guide</NuxtLink> covers browsing in Game Mode in more detail.
    </p>

    <h2>4. Give single sites their own shortcut</h2>
    <p>
      Chrome in the library opens with tabs and an address bar. For a site you use often, such as YouTube or a cloud gaming service, a dedicated shortcut is quicker: it opens that site full screen in Chrome's kiosk mode.
      The generator makes one per site.
    </p>
    <GuideSteps url="https://www.youtube.com" name="YouTube" />

    <h2>Questions</h2>
    <template v-for="f in faq" :key="f.q">
      <h3>{{ f.q }}</h3>
      <p>{{ f.a }}</p>
    </template>
    <p>Need the button combos? See the <NuxtLink to="/steam-deck-shortcuts">Steam Deck shortcuts cheat sheet</NuxtLink>.</p>
  </GuidePage>
</template>
