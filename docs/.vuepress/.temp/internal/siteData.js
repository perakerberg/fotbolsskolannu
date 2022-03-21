export const siteData = {
  "base": "/",
  "lang": "sv-SE",
  "title": "Fotbollsskolan ",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "./style/main.css"
      }
    ],
    [
      "link",
      {
        "rel": "preconnect",
        "href": "https://fonts.googleapis.com"
      }
    ],
    [
      "link",
      {
        "rel": "preconnect",
        "href": "https://fonts.gstatic.com",
        "crossorigin": true
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://fonts.googleapis.com/css2?family=Luckiest+Guy"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
