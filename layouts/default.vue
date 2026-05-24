<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="deck-screen">
    <div class="bg-noise" aria-hidden="true" />
    <div class="bg-vignette" aria-hidden="true" />
    <LayoutStatusBar />
    <main class="stage">
      <div class="stage-inner" :class="{ 'create-stage': route.path === '/' }">
        <slot />
      </div>
    </main>
    <LayoutHintBar />
  </div>
</template>
