interface WebAppCreateResponse {
  body?: string;
  error?: string;
}

export const useAppState = () => {
  const url = useState("app-url", () => "https://google.com");
  const appName = useState("app-name", () => "Google");
  const useDocs = useState("app-use-docs", () => true);
  const script = useState("app-script", () => "");
  const generating = useState("app-generating", () => false);
  const copied = useState("app-copied", () => false);

  const canGenerate = computed(() => url.value.trim().length > 0 && appName.value.trim().length > 0 && !generating.value);

  // Slug: kebab-case, alphanumeric only
  const slug = computed(() => {
    const s = (appName.value || "app")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    return s || "app";
  });

  const fileName = computed(() => `${slug.value}.sh`);

  const previewHost = computed(() => {
    try {
      return new URL(url.value || "https://example.com").hostname.replace(/^www\./, "");
    } catch {
      return "invalid url";
    }
  });

  const generate = async () => {
    if (!canGenerate.value) return;
    generating.value = true;
    try {
      // Run the API call and a minimum 380ms delay in parallel for UX shimmer
      const [response] = await Promise.all([
        $fetch<WebAppCreateResponse>("/api/web-app/create", {
          method: "POST",
          body: {
            siteUrl: url.value,
            appName: appName.value,
            path: useDocs.value ? undefined : "~/",
          },
        }),
        new Promise<void>((resolve) => setTimeout(resolve, 380)),
      ]);
      if (response.body) {
        script.value = response.body;
      }
    } finally {
      generating.value = false;
    }
  };

  const download = () => {
    if (!script.value) return;
    const blob = new Blob([script.value], { type: "application/x-sh" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName.value;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  };

  const copy = async () => {
    if (!script.value) return;
    try {
      await navigator.clipboard.writeText(script.value);
    } catch {}
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 1400);
  };

  return {
    url,
    appName,
    useDocs,
    script,
    generating,
    copied,
    canGenerate,
    slug,
    fileName,
    previewHost,
    generate,
    download,
    copy,
  };
};
