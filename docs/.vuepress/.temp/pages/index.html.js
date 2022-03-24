export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Startsida",
  "lang": "sv-SE",
  "frontmatter": {
    "title": "Startsida"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1647893921000,
    "contributors": [
      {
        "name": "Per Åkerberg",
        "email": "per.akerberg@live.se",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "index.md"
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
