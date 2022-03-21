import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-539aa44c","/anmalan.html",{"title":"Anmälan"},["/anmalan","/anmalan.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/readme.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-187de182","/schema.html",{"title":"Schema"},["/schema","/schema.md"]],
  ["v-1692a0a2","/om.html",{"title":"Fotbollsskolan"},["/om","/om.md"]],
  ["v-51f3fb32","/kontakt.html",{"title":"Kontakt"},["/kontakt","/kontakt.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
