export const themeData = {
  "logo": "/images/logo_v4.png",
  "navbar": [
    {
      "text": "[Start]",
      "link": "/start"
    },
    {
      "text": "Ledare sökes!",
      "link": "/ledare-sokes"
    },
    {
      "text": "Anmälan",
      "link": "/anmalan"
    },
    {
      "text": "Om",
      "link": "/om"
    },
    {
      "text": "Kontakt",
      "link": "/kontakt"
    },
    {
      "text": "Schema",
      "link": "/schema"
    }
  ],
  "sidebar": false,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

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
