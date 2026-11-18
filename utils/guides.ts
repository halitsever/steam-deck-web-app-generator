export interface Guide {
  path: string;
  title: string;
  summary: string;
}

/** Feeds the guides index, the home page links and the footer of each guide. */
export const guides: Guide[] = [
  {
    path: "/guides/steam-deck-youtube",
    title: "Watch YouTube on Steam Deck in Game Mode",
    summary: "Add youtube.com to your library as a non-Steam game that opens full screen in Chrome.",
  },
  {
    path: "/guides/steam-deck-netflix",
    title: "Watch Netflix on Steam Deck in Game Mode",
    summary: "Make a Netflix shortcut for Game Mode, and what Netflix says about Chrome on Linux.",
  },
  {
    path: "/guides/steam-deck-xbox-cloud-gaming",
    title: "Xbox Cloud Gaming on Steam Deck",
    summary: "Microsoft's Edge setup, and when a Chrome shortcut for xbox.com/play is enough.",
  },
  {
    path: "/guides/steam-deck-geforce-now",
    title: "GeForce NOW on Steam Deck",
    summary: "NVIDIA's own Steam Deck installer, and the browser shortcut as a fallback.",
  },
  {
    path: "/guides/steam-deck-web-browser",
    title: "Use a web browser in Steam Deck Game Mode",
    summary: "Add Chrome itself for general browsing, or a single site as its own launcher.",
  },
  {
    path: "/guides/add-non-steam-game",
    title: "Add a non-Steam game on Steam Deck",
    summary: "What a non-Steam game is, Valve's steps, and how the generator adds one for you.",
  },
];
