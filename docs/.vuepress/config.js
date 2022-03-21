const { path } = require('@vuepress/utils')

module.exports = {
    // site config
    head: [
        ['link', { rel: 'stylesheet', href: './style/main.css' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=LuckiestGuy' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Avenir' }],
      ],
    lang: 'sv-SE',
    title: 'Fotbollsskolan ',
    description: '',
  
    // theme and its config
    theme: '@vuepress/default',
   
    themeConfig: {
      logo: '/images/logo_v4.png',
      navbar: [
        { text: 'Anmälan', link: '/anmalan' },
        { text: 'Schema', link: '/schema' },
        { text: 'Om', link: '/om' },
        { text: 'Kontakt', link: '/kontakt' },
        { text: 'Lira blågult', link: 'https://vastergotland.svenskfotboll.se/forening/fotbollsskolan--lira-blagult/' }
      ],
      sidebar: false,
    
    },
    
    clientAppEnhanceFiles: path.resolve(
        __dirname,
        './clientAppEnhance.js'
      ),
    
   
  }