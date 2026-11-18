import { generateBashScript, isValidAppName, isValidUrl } from "../../utils/bash-script";

export default defineEventHandler(async (event) => {
  try {
    const { appName, siteUrl, path } = await readBody(event);

    if (!appName || !siteUrl)
      return {
        error: "You need specify app name & site url",
      };

    if (!isValidAppName(appName))
      return {
        error: "App name can't contain a slash or line breaks!",
      };

    if (!isValidUrl(siteUrl))
      return {
        error: "Please enter a valid URl!",
      };

    return {
      body: generateBashScript(appName, siteUrl, path === "~/"),
    };
  } catch (err) {
    console.error(err);
    return { error: "Internal server error" };
  }
});
