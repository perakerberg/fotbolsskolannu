const { path } = require('@vuepress/utils')

module.exports = {
    // site config
    head: [
        ['link', { rel: "shortcut icon", href: "/images/soccer.ico"}],
        ['link', { rel: 'stylesheet', href: './style/main.css' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Luckiest+Guy' }],
      ],
    lang: 'sv-SE',
    title: 'Fotbollsskola i Öxnevalla & Horred ',
    description: '',
  
    // theme and its config
    theme: '@vuepress/default',
   
    themeConfig: {
      logo: '/images/logo_v4.png',
      navbar: [
       
        { text: '[Start]', link: '/start' },
        { text: 'Ledare sökes!', link: '/ledare-sokes' },
        { text: 'Anmälan', link: '/anmalan' },
        { text: 'Om', link: '/om' },
        { text: 'Kontakt', link: '/kontakt' },
        { text: 'Schema', link: '/schema' },
     
      ],
      sidebar: false,
    
    },
    
    clientAppEnhanceFiles: path.resolve(
        __dirname,
        './clientAppEnhance.js'
      ),
    
   
  }