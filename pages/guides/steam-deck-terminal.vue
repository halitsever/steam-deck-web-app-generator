<script setup lang="ts">
const faq = [
  {
    q: "How do I open the terminal on Steam Deck?",
    a: "Switch to Desktop Mode, click the application launcher in the lower left corner and start Konsole, the KDE terminal that comes with SteamOS. Typing Konsole in the launcher's search box finds it.",
  },
  {
    q: "How do I run a .sh file on Steam Deck?",
    a: "Open Konsole in the folder that holds the file, make it executable with chmod +x name.sh, then start it with ./name.sh. Both commands run as your normal user.",
  },
  {
    q: "Why can't I type in Konsole on Steam Deck?",
    a: "The on-screen keyboard opens with STEAM + X, but Valve's Desktop FAQ says that only works while Steam is running. Start Steam on the desktop first, or plug in a keyboard.",
  },
  {
    q: "What is the Konsole password on Steam Deck?",
    a: "There is none by default. The deck user ships without a password, so commands that use sudo will not work until you set one with passwd.",
  },
];

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    },
  ],
});
</script>

<template>
  <GuidePage
    seo-title="How to Open the Terminal on Steam Deck and Run a .sh File"
    description="Open Konsole, the terminal on Steam Deck, in Desktop Mode, type with the on-screen keyboard, move to a folder and run a .sh script with chmod and ./."
    heading="Open Konsole on Steam Deck and run a script"
    eyebrow="STEAM DECK TERMINAL"
    published="2026-11-28"
  >
    <p class="guide-lead">
      Many Steam Deck guides, this site's generator included, end with "run this in a terminal". On the Deck, the terminal is an app called Konsole, and it only exists in Desktop Mode. Here is how to open it, type in it,
      and run a downloaded <code>.sh</code> file.
    </p>

    <h2>1. Switch to Desktop Mode</h2>
    <p>
      Press STEAM, open <strong>Power</strong> and choose <strong>Switch to Desktop</strong>. The right trackpad moves the pointer, R2 clicks and L2 right-clicks. The
      <NuxtLink to="/guides/steam-deck-desktop-mode">Desktop Mode guide</NuxtLink> has the rest of the controls.
    </p>

    <h2>2. Open Konsole</h2>
    <p>
      Konsole is KDE's terminal, and SteamOS's desktop is KDE Plasma. Click the application launcher in the lower left corner of the taskbar and start <strong>Konsole</strong>. If you do not see it, type
      <code>konsole</code> while the launcher is open to search for it.
    </p>
    <p>
      To open a terminal straight in a folder, for example where you saved a download, open that folder in <strong>Dolphin</strong>, the file manager, right-click an empty spot and choose
      <strong>Open Terminal Here</strong>.
    </p>

    <h2>3. Typing in Konsole</h2>
    <ul>
      <li>
        Press <strong>STEAM + X</strong> for the on-screen keyboard. Valve's
        <a href="https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C" target="_blank" rel="noreferrer">Desktop FAQ</a>
        says this works while Steam is running, so start Steam on the desktop if the keyboard does not appear.
      </li>
      <li>For longer sessions, a USB or Bluetooth keyboard is far quicker. Valve's FAQ says some desktop situations still need one.</li>
      <li>In Konsole, paste with <strong>Ctrl + Shift + V</strong>. Plain Ctrl + V does not paste in most Linux terminals.</li>
    </ul>

    <h2>4. Go to the folder with your script</h2>
    <p>Chrome and most browsers save downloads to your Downloads folder. Move there with <code>cd</code> and list the files to check the name:</p>
    <pre class="guide-code"><code>cd ~/Downloads
ls</code></pre>
    <p>File names are case-sensitive, and a name with spaces needs quotes, as in <code>cd "My Folder"</code>.</p>

    <h2>5. Run the .sh file</h2>
    <p>A downloaded script is not executable yet. Give it permission once, then run it from the same folder:</p>
    <pre class="guide-code"><code>chmod +x youtube.sh
./youtube.sh</code></pre>
    <p>
      The <code>./</code> tells the shell to run the file in the current folder. If you would rather not change permissions, <code>bash youtube.sh</code> runs it too. Read a script before you run it:
      <code>cat youtube.sh</code> prints it. Valve's FAQ specifically warns against running random commands and scripts found on the internet.
    </p>

    <h2>When a command asks for a password</h2>
    <p>
      Commands that start with <code>sudo</code> ask for the deck user's password, and the Deck ships without one. Valve's answer is to set one with <code>passwd</code>; the
      <NuxtLink to="/guides/steam-deck-sudo-password">sudo password guide</NuxtLink> walks through it. Konsole shows nothing while you type a password, which is normal.
    </p>

    <h2>Example: the generator's script</h2>
    <p>
      This site's generator produces exactly the kind of file described above. It writes a launcher that opens one website full screen in Chrome and adds it to Steam as a non-Steam game, and it does not need sudo. The
      whole flow, using YouTube as the example:
    </p>
    <GuideSteps url="https://www.youtube.com" name="YouTube" />

    <h2>Questions</h2>
    <template v-for="f in faq" :key="f.q">
      <h3>{{ f.q }}</h3>
      <p>{{ f.a }}</p>
    </template>
  </GuidePage>
</template>
