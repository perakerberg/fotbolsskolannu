import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  lang: "sv-SE",
  title: "Fotbollsskola i Öxnevalla & Horred ",
  description: "",
  // site config
  head: [
    ["link", { rel: "shortcut icon", href: "/images/soccer.ico" }],
    ["link", { rel: "stylesheet", href: "./style/main.css" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Luckiest+Guy",
      },
    ],
  ],

  theme: defaultTheme({
    logo: "https://res.cloudinary.com/dpd5cqqpz/image/upload/w_200,ar_1:1,c_fill,g_auto,e_art:hokusai/v1678396597/fotbollsskola/logga2023_hsvhft.png",
    navbar: [
      { text: "[Start]", link: "/start" },

      { text: "Om", link: "/om" },
      { text: "Ledare sökes!", link: "/ledare-sokes" },
      // {
      //   text: "Anmälan",
      //   link: "https://start.landslagetsfotbollsskola.se/sv/clubs/8701-horreds-if-ifk-oxnevalla/event/4785-fotbollsskolan-horred-oxnevalla/webanmalan/new",
      // },
      { text: "Kontakt", link: "/kontakt" },
    ],
    sidebar: false,
    lastUpdated: false,
    contributors: false,

    backToHome: "Tillbaka hem",
    notFound: [
      "Nu dribblade du upp dig på läktaren",
      "Här var det bortaplan, minsann!",
      "Rackarns, här finns ingen sida",
      "Fintat bort dig?",
    ],
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
