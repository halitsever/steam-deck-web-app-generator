<script setup lang="ts">
const route = useRoute();
const activeTab = computed(() => (route.path === "/donate" ? "donate" : "create"));
</script>

<template>
  <header class="status-bar">
    <div class="brand">
      <!-- Steam logo glyph -->
      <Icon name="simple-icons:steamdeck" />

      <span class="brand-name">Steam Deck Web App Generator</span>
    </div>

    <nav class="tabs" role="tablist" aria-label="Navigation">
      <button role="tab" :aria-selected="activeTab === 'create'" :class="['tab', { active: activeTab === 'create' }]" @click="navigateTo('/')">
        <span>CREATE</span>
      </button>
      <button role="tab" :aria-selected="activeTab === 'donate'" :class="['tab', { active: activeTab === 'donate' }]" @click="navigateTo('/donate')">
        <span>DONATE</span>
      </button>
    </nav>

    <div class="tray">
      <a class="tray-btn" href="https://github.com/halitsever/steam-deck-web-app-generator" target="_blank" rel="noreferrer" aria-label="Github">
        <!-- GitHub octocat -->
        <Icon name="uil:github" />
      </a>
    </div>
  </header>
</template>
