const isValidUrl = (url: string) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i",
  );
  return pattern.test(url);
};

const generateBashScript = (appName: string, siteUrl: string, path?: string) => {
  return `#!/bin/bash

        # Global variables for script
        app_name='${appName}'
        site_url='${siteUrl}'
        default_path=${path ?? "~/Documents"}

        # Default path
        cd $default_path || exit

        # Create the script file
        echo -e '#!/bin/bash\n/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=/app/bin/chrome --file-forwarding com.google.Chrome --new-window --hide-scrollbars --kiosk '"$site_url"'' > "$app_name.sh"

        # Make script runnable
        chmod +x ./$app_name.sh

        echo $app_name successfully created!

        # Add our script file to Steam as non-Steam game
        steamos-add-to-steam $(pwd)/$app_name.sh
`;
};

export default defineEventHandler(async (event) => {
  try {
    const { appName, siteUrl, path } = await readBody(event);

    if (!appName || !siteUrl)
      return {
        error: "You need specify app name & site url",
      };

    if (!isValidUrl(siteUrl))
      return {
        error: "Please enter a valid URl!",
      };

    return {
      body: generateBashScript(appName, siteUrl, path),
    };
  } catch (err) {
    console.error(err);
    return { error: "Internal server error" };
  }
});
