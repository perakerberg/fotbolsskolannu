export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"[Start]\",\"link\":\"/start\"},{\"text\":\"Om\",\"link\":\"/om\"},{\"text\":\"Kontakt\",\"link\":\"/kontakt\"}],\"sidebar\":false,\"lastUpdated\":false,\"contributors\":false,\"backToHome\":\"Tillbaka hem\",\"notFound\":[\"Nu dribblade du upp dig på läktaren\",\"Här var det bortaplan, minsann!\",\"Rackarns, här finns ingen sida\",\"Fintat bort dig?\"],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
