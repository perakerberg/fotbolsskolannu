import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-539aa44c","/anmalan.html",{"title":"Anmälan"},["/anmalan","/anmalan.md"]],
  ["v-8daa1a0e","/",{"title":"Startsida"},["/index.html","/index.md"]],
  ["v-51f3fb32","/kontakt.html",{"title":""},["/kontakt","/kontakt.md"]],
  ["v-6ed97500","/ledare-info.html",{"title":"Ledarinformation"},["/ledare-info","/ledare-info.md"]],
  ["v-5c30eaf2","/ledare-sokes.html",{"title":"Ledare sökes!"},["/ledare-sokes","/ledare-sokes.md"]],
  ["v-1692a0a2","/om.html",{"title":"Fotbollsskolan"},["/om","/om.md"]],
  ["v-187de182","/schema.html",{"title":"Schema"},["/schema","/schema.md"]],
  ["v-20f9ed8a","/sponsorer-sokes.html",{"title":"Gör det möjligt - sponsra!"},["/sponsorer-sokes","/sponsorer-sokes.md"]],
  ["v-6f9a3970","/start.html",{"title":"Startsida"},["/start","/start.md"]],
  ["v-eb4c1e5e","/tack-ledare.html",{"title":"Tack!"},["/tack-ledare","/tack-ledare.md"]],
  ["v-8fbd50ea","/tack.html",{"title":"Tack!"},["/tack","/tack.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
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
