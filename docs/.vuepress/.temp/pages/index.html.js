export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "sv-SE",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/logo_v4.png",
    "heroText": "Fotbollsskolan 2022",
    "tagline": null,
    "actionText": "Get Started",
    "actionLink": "/anmalan/",
    "features": [
      {
        "title": "För alla barn 6-12 år",
        "details": "Alla barn mellan 6-12 år (födda 2016-2010) är välkomna. Oavsett om du har spelat fotboll förut, för längesedan eller aldrig har provat - varmt välkommen! Och du - det är gratis, så alla kan vara med."
      },
      {
        "title": "Av hela bygden",
        "details": "Våra två fina föreningar, tillsammans med många frivilliga i bygden gör detta möjligt."
      },
      {
        "title": "Glädje, glädje... och glädje!",
        "details": "Det här handlar inte bara om fotboll. Det här handlar framförallt om att ha roligt tillsammans, att göra något speciellt under sommarlovets första dagar. Dagar att minnas, förhoppningsvis länge!"
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1647893911000,
    "contributors": [
      {
        "name": "Per Åkerberg",
        "email": "per.akerberg@live.se",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "readme.md"
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
