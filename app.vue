<script setup lang="ts">
const site = "https://steam-deck-web-app-generator.vercel.app";
const description = "Add any website or web app to Steam Deck Game Mode as a non-Steam game. Generate a script that adds a full-screen Chrome shortcut for the site to your Steam library.";
const route = useRoute();
const pageUrl = computed(() => site + route.path);

useSeoMeta({
  title: "Add Websites to Steam Deck Game Mode | Steam Deck Web App Generator",
  ogTitle: "Add Websites to Steam Deck Game Mode",
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
