<script setup lang="ts">
const props = defineProps<{
  seoTitle: string;
  description: string;
  heading: string;
  eyebrow: string;
  /** ISO date; when set, the guide is marked up as a BlogPosting by its author. */
  published?: string;
}>();

const route = useRoute();
const otherGuides = computed(() => guides.filter((g) => g.path !== route.path));

useSeoMeta({
  title: props.seoTitle,
  ogTitle: props.seoTitle,
  description: props.description,
  ogDescription: props.description,
});

const publishedLabel = computed(() => (props.published ? new Date(`${props.published}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }) : ""));

const site = "https://steam-deck-web-app-generator.vercel.app";
if (props.published) {
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: props.heading,
          description: props.description,
          image: `${site}/og.png`,
          datePublished: props.published,
          dateModified: props.published,
          inLanguage: "en",
          mainEntityOfPage: site + route.path,
          author: { "@type": "Person", name: "Halit Sever", url: "https://www.halit.org" },
          publisher: { "@type": "Person", name: "Halit Sever", url: "https://www.halit.org" },
        }),
      },
    ],
  });
}
</script>

<template>
  <article class="panel guide-panel">
    <header class="panel-header">
      <div class="panel-eyebrow">
        <span class="dot" aria-hidden="true" />
        {{ eyebrow }}
      </div>
      <h1>{{ heading }}</h1>
      <p v-if="published" class="panel-sub">
        By <a href="https://www.halit.org" rel="author">Halit Sever</a> · <time :datetime="published">{{ publishedLabel }}</time>
      </p>
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
