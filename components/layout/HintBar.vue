<script setup lang="ts">
const route = useRoute();
const { canGenerate, script, generate, download } = useAppState();

const hasScript = computed(() => script.value.length > 0);

const handleDonate = () => {
  navigateTo(route.path === "/donate" ? "/" : "/donate");
};

const handleGithub = () => {
  window.open("https://github.com/halitsever/steam-deck-web-app-generator", "_blank");
};
</script>

<template>
  <footer class="hint-bar">
    <div class="hints-left">
      <button class="hint" :disabled="!canGenerate" @click="generate">
        <span class="pad-glyph" style="background: #3aa84a"><span>A</span></span>
        <span>Generate</span>
      </button>
      <button class="hint" :disabled="!hasScript" @click="download">
        <span class="pad-glyph" style="background: #3aa3e8"><span>X</span></span>
        <span>Download .sh</span>
      </button>
      <button class="hint" @click="handleDonate">
        <span class="pad-glyph" style="background: #d8b03a"><span>Y</span></span>
        <span>Donate</span>
      </button>
      <button class="hint" @click="handleGithub">
        <span class="pad-glyph" style="background: #c14a3a"><span>B</span></span>
        <span>Github</span>
      </button>
    </div>
  </footer>
</template>
