/** Single-quotes a value for bash, so spaces, quotes, `&` and `$` reach the command literally. */
export const shellQuote = (value: string) => `'${value.replace(/'/g, `'\\''`)}'`;

export const isValidUrl = (url: string) => {
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

/** The app name becomes a file name, so it cannot hold a slash or control characters. */
export const isValidAppName = (name: string) => name.trim().length > 0 && !/[/\x00-\x1f\x7f]/.test(name);

export const generateBashScript = (appName: string, siteUrl: string, useHomeFolder = false) => {
  const folder = useHomeFolder ? `"$HOME"` : `"$HOME/Documents"`;

  return `#!/bin/bash

# Global variables for script
app_name=${shellQuote(appName)}
default_path=${folder}

# Default path
cd "$default_path" || exit

# Create the script file
cat > "$app_name.sh" <<'LAUNCHER'
#!/bin/bash
/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=/app/bin/chrome --file-forwarding com.google.Chrome --new-window --hide-scrollbars --kiosk ${shellQuote(siteUrl)}
LAUNCHER

# Make script runnable
chmod +x "./$app_name.sh"

printf '%s successfully created!\\n' "$app_name"

# Add our script file to Steam as non-Steam game
steamos-add-to-steam "$(pwd)/$app_name.sh"
`;
};
