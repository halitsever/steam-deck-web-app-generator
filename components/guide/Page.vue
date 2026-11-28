<script setup lang="ts">
const props = defineProps<{
  seoTitle: string;
  description: string;
  heading: string;
  eyebrow: string;
}>();

const route = useRoute();
const otherGuides = computed(() => guides.filter((g) => g.path !== route.path));

useSeoMeta({
  title: props.seoTitle,
  ogTitle: props.seoTitle,
  description: props.description,
  ogDescription: props.description,
});
</script>

<template>
  <article class="panel guide-panel">
    <header class="panel-header">
      <div class="panel-eyebrow">
        <span class="dot" aria-hidden="true" />
        {{ eyebrow }}
      </div>
      <h1>{{ heading }}</h1>
    </header>

    <div class="guide-body">
      <slot />
    </div>

    <footer class="guide-footer">
      <NuxtLink class="cta guide-cta" to="/">
        <span class="cta-label">OPEN THE GENERATOR</span>
      </NuxtLink>
      <nav aria-label="More guides">
        <h2 class="guide-more-title">More Steam Deck guides</h2>
        <ul class="guide-links">
          <li v-for="g in otherGuides" :key="g.path">
            <NuxtLink :to="g.path">{{ g.title }}</NuxtLink>
          </li>
          <li><NuxtLink to="/steam-deck-shortcuts">Steam Deck shortcuts cheat sheet</NuxtLink></li>
        </ul>
      </nav>
    </footer>
  </article>
</template>
