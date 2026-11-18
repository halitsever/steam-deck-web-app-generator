<template>
  <GuidePage
    seo-title="How to Watch YouTube on Steam Deck in Game Mode"
    description="Add YouTube to your Steam Deck library as a non-Steam game. Generate a script that creates a full-screen Chrome shortcut for youtube.com you can launch from Game Mode."
    heading="How to watch YouTube on Steam Deck in Game Mode"
    eyebrow="STEAM DECK YOUTUBE"
  >
    <p class="guide-lead">
      On Steam Deck, YouTube runs in a web browser. This guide turns youtube.com into its own entry in your Steam library, so you can open it from Game Mode like a game, without switching to the desktop each time.
    </p>
    <p>
      Google's
      <a href="https://support.google.com/youtube/answer/78358" target="_blank" rel="noreferrer">YouTube system requirements</a>
      list the newest version of Google Chrome for basic viewing, and Chrome is the browser the generated shortcut uses.
    </p>

    <h2>Add YouTube to Game Mode</h2>
    <GuideSteps url="https://www.youtube.com" name="YouTube" />

    <h2>Using YouTube on the Deck</h2>
    <p>
      The shortcut opens the regular desktop YouTube site, not a TV or console layout. Move the pointer with the trackpad to pick videos, and press STEAM + X when you need to type a search. To sign in, either do it once
      in Chrome on the desktop or sign in inside the shortcut with the on-screen keyboard.
    </p>
    <p>
      If you also want to visit other sites from Game Mode, add Chrome itself as well. The
      <NuxtLink to="/guides/steam-deck-web-browser">web browser guide</NuxtLink> covers that.
    </p>
  </GuidePage>
</template>
