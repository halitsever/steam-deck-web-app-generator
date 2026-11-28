<script setup lang="ts">
const description = "Steam Deck guides: YouTube, Netflix, Xbox Cloud Gaming, Discord and Spotify in Game Mode, Desktop Mode, the terminal, sudo and artwork for shortcuts.";

useSeoMeta({
  title: "Steam Deck Game Mode Guides | Steam Deck Web App Generator",
  ogTitle: "Steam Deck Game Mode Guides",
  description,
  ogDescription: description,
});
</script>

<template>
  <section class="panel guide-panel">
    <div class="panel-header">
      <div class="panel-eyebrow">
        <span class="dot" aria-hidden="true" />
        GUIDES
      </div>
      <h1>Steam Deck Game Mode guides</h1>
      <p class="panel-sub">
        How to get streaming sites, cloud gaming and a browser into your Steam Deck library, using this generator or the service's own app where that works better. For button combos, see the
        <NuxtLink to="/steam-deck-shortcuts">shortcuts cheat sheet</NuxtLink>.
      </p>
    </div>
    <ul class="guide-cards">
      <li v-for="g in guides" :key="g.path">
        <NuxtLink :to="g.path" class="guide-card">
          <span class="guide-card-title">{{ g.title }}</span>
          <span class="guide-card-sub">{{ g.summary }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
