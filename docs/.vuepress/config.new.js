import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
export default defineUserConfig({
  lang: "sv-SE",
  title: "IFK Öxnevalla - ledare",
  description: "Resurser för ledare inom IFK Öxnevalla",

  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://az729104.cdn.laget.se/emblem_5377565.png;width=480;height=480;paddingWidth=16;mode=pad;scale=both;anchor=middlecenter",
      },
    ],
    ["link", { rel: "stylesheet", href: "./styles/main.css" }],
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
        href: "https://fonts.googleapis.com/css2?family=Roboto",
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
      },
    ],
  ],

  // theme and its config
  theme: defaultTheme({
    logo: "https://az729104.cdn.laget.se/emblem_5377565.png;width=480;height=480;paddingWidth=16;mode=pad;scale=both;anchor=middlecenter",
    navbar: [
      // { text: '[Start]', link: '/start' },

      { text: "Hem", link: "/" },
      { text: "Tips", link: "/tips" },
      { text: "Ny spelare", link: "/anmalan" },
      { text: "Registerutdrag", link: "/registerutdrag" },

      { text: "Övningar", link: "/ovningar" },
      // { text: 'Schema', link: '/schema' },
    ],
    sidebar: false,
    lastUpdated: false,
    contributors: false,
    // repo: "perakerberg/ifk-ledare",
    // docsDir: "docs",
    // docsBranch: "master",
    // editLinks: true,
    // editLinkText: "Hjälp till att förbättra sidan",
    backToHome: "Tillbaka hem",
    notFound: [
      "Nu dribblade du upp dig på läktaren",
      "Här var det bortaplan, minsann!",
      "Rackarns, här finns ingen sida",
      "Fintat bort dig?",
      "Hedevallen ligger åt andra hållet...",
      "Nej du, här blir det ingen fotboll spelad",
    ],
  }),

  // clientAppEnhanceFiles: path.resolve(
  //     __dirname,
  //     './clientAppEnhance.js'
  //   ),
});
