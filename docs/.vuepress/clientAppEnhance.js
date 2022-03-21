import { defineClientAppEnhance } from '@vuepress/client'
import StartPage from './components/StartPage.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('StartPage', StartPage)
})