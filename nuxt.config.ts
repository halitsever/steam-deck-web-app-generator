// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Manrope:wght@500;600;700;800&display=swap",
        },
      ],
      /** Cloudflare Web Analytics, production only so previews and local runs stay out of the numbers. */
      script:
        process.env.VERCEL_ENV === "production"
          ? [
              {
                src: "https://static.cloudflareinsights.com/beacon.min.js",
                defer: true,
                tagPosition: "bodyClose" as const,
                "data-cf-beacon": '{"token": "6a6a53d31fd341c99cfa7ca8aa512516"}',
              },
            ]
          : [],
    },
  },

  modules: ["@nuxt/icon"],
});
