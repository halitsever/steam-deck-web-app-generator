<script setup lang="ts">
const applicationProperties = reactive({
  siteUrl: "",
  appName: "",
  path: null,
});

const createdScriptResult: Ref<any> = ref(null);

interface IWebAppCreateResponse {
  body: string;
  error: string;
}

const snackbar = useSnackbar();

const createWebApp = async () => {
  const responseData = await $fetch<IWebAppCreateResponse>("/api/web-app/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      path: applicationProperties.path,
      siteUrl: applicationProperties.siteUrl,
      appName: applicationProperties.appName,
    },
  });

  createdScriptResult.value = responseData;
};

const copyScriptToClipboard = (scriptData: string) => {
  navigator.clipboard.writeText(scriptData);
  snackbar.add({
    type: "success",
    text: "Script copied to clipboard!",
  });
};

const downloadScript = (scriptData: string) => {
  const blob = new Blob([scriptData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "steam-web-app-generator.sh";
  link.click();
  URL.revokeObjectURL(url);
};
</script>

<template>
  <form @submit.prevent="createWebApp" class="flex flex-col">
    <div class="text-white p-2 mb-4 rounded-lg bg-red-500" v-if="createdScriptResult?.error">
      {{ createdScriptResult?.error }}
    </div>
    <input class="border rounded-lg p-2" placeholder="Site Url" v-model="applicationProperties.siteUrl" type="text" />

    <input class="border rounded-lg mt-4 p-2" placeholder="Application Name" v-model="applicationProperties.appName" type="text" />

    <div class="flex items-center mb-4 mt-4">
      <input
        disabled
        checked
        id="disabled-checkbox"
        type="checkbox"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="disabled-checkbox" class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Use Documents folder as default folder</label>
    </div>

    <button type="submit" class="bg-lime-400 mt-4 rounded-lg p-2">Generate</button>
  </form>

  <div id="result" v-if="createdScriptResult?.body">
    <button @click="downloadScript(createdScriptResult?.body)" type="submit" class="bg-lime-400 mt-4 rounded-lg p-2">
      <Icon name="material-symbols:download" />
      Download Script
    </button>

    <a>
      How can i run? Please check the

      <NuxtLink class="text-blue-500" to="https://github.com/halitsever/steam-deck-web-app-generator">docs</NuxtLink>

      for that
    </a>
    <p @click="copyScriptToClipboard(createdScriptResult?.body)" class="whitespace-pre-line mt-4 border rounded-lg p-2 break-all cursor-pointer">
      {{ createdScriptResult?.body }}
    </p>
  </div>
</template>
