<script setup lang="ts">
const site = "https://steam-deck-web-app-generator.vercel.app";
const description =
  "Turn any website into a Steam Deck Game Mode app. Generate a shortcut script that adds the site to Steam as a non-Steam game and opens it in Chrome.";
const route = useRoute();
const pageUrl = computed(() => site + route.path);

useSeoMeta({
  title: "Steam Deck Web App Generator | Generate Website to Web App for Steam Deck",
  ogTitle: "Steam Deck Web App Generator",
  description,
  ogDescription: description,
  ogType: "website",
  ogUrl: pageUrl,
  ogImage: `${site}/og.png`,
  ogImageWidth: 1280,
  ogImageHeight: 640,
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "canonical", href: pageUrl }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Steam Deck Web App Generator",
        description,
        url: `${site}/`,
        image: `${site}/og.png`,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "SteamOS",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        codeRepository: "https://github.com/halitsever/steam-deck-web-app-generator",
        programmingLanguage: ["Vue", "TypeScript", "Bash"],
        license: "https://opensource.org/licenses/MIT",
        author: { "@type": "Person", name: "Halit Sever", url: "https://github.com/halitsever" },
      }),
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
