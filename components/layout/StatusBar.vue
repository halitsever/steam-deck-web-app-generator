<script setup lang="ts">
const route = useRoute();
const activeTab = computed(() => (route.path === "/donate" ? "donate" : route.path.startsWith("/guides") ? "guides" : "create"));
</script>

<template>
  <header class="status-bar">
    <div class="brand">
      <!-- Steam logo glyph -->
      <Icon name="simple-icons:steamdeck" />

      <span class="brand-name">Steam Deck Web App Generator</span>
    </div>

    <nav class="tabs" aria-label="Navigation">
      <NuxtLink to="/" :aria-current="activeTab === 'create' ? 'page' : undefined" :class="['tab', { active: activeTab === 'create' }]">
        <span>CREATE</span>
      </NuxtLink>
      <NuxtLink to="/guides" :aria-current="activeTab === 'guides' ? 'page' : undefined" :class="['tab', { active: activeTab === 'guides' }]">
        <span>GUIDES</span>
      </NuxtLink>
      <NuxtLink to="/donate" :aria-current="activeTab === 'donate' ? 'page' : undefined" :class="['tab', { active: activeTab === 'donate' }]">
        <span>DONATE</span>
      </NuxtLink>
    </nav>

    <div class="tray">
      <a class="tray-btn" href="https://github.com/halitsever/steam-deck-web-app-generator" target="_blank" rel="noreferrer" aria-label="Github">
        <!-- GitHub octocat -->
        <Icon name="uil:github" />
      </a>
    </div>
  </header>
</template>
