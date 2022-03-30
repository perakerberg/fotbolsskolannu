export const data = {
  "key": "v-539aa44c",
  "path": "/anmalan.html",
  "title": "Anmälan",
  "lang": "sv-SE",
  "frontmatter": {
    "title": "Anmälan"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Länk till anmälan",
      "slug": "lank-till-anmalan",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1648634011000,
    "contributors": [
      {
        "name": "Per Åkerberg",
        "email": "per.akerberg@live.se",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "anmalan.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
