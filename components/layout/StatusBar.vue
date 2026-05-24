<script setup lang="ts">
const route = useRoute()
const activeTab = computed(() => route.path === '/donate' ? 'donate' : 'create')
</script>

<template>
  <header class="status-bar">
    <div class="brand">
      <!-- Steam logo glyph -->
      <svg class="brand-mark" viewBox="0 0 24 24" fill="none" width="24" height="24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6" />
        <circle cx="15.5" cy="8.5" r="2.6" stroke="currentColor" stroke-width="1.6" />
        <circle cx="8.5" cy="14.5" r="1.9" stroke="currentColor" stroke-width="1.6" />
        <path d="M5.2 14.2l3.3 1.3M13.4 9.7l2.1 2.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
      </svg>
      <span class="brand-name">Steam Deck Web App Generator</span>
    </div>

    <nav class="tabs" role="tablist" aria-label="Navigation">
      <button
        role="tab"
        :aria-selected="activeTab === 'create'"
        :class="['tab', { active: activeTab === 'create' }]"
        @click="navigateTo('/')"
      >
        <span>CREATE</span>
      </button>
      <button
        role="tab"
        :aria-selected="activeTab === 'donate'"
        :class="['tab', { active: activeTab === 'donate' }]"
        @click="navigateTo('/donate')"
      >
        <span>DONATE</span>
      </button>
    </nav>

    <div class="tray">
      <a
        class="tray-btn"
        href="https://github.com/halitsever/steam-deck-web-app-generator"
        target="_blank"
        rel="noreferrer"
        aria-label="Github"
      >
        <!-- GitHub octocat -->
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
          <path d="M12 .5C5.7.5.7 5.5.7 11.8c0 5 3.2 9.2 7.7 10.7.6.1.8-.2.8-.6v-2c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 1.1.9-.3 1.8-.4 2.8-.4s1.9.1 2.8.4c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.3 5.5 18.3.5 12 .5z" />
        </svg>
      </a>
    </div>
  </header>
</template>
