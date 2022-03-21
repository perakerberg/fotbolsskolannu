module.exports = {
    // site config
    lang: 'en-US',
    title: 'Hello, VuePress!',
    description: 'This is my first VuePress site',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      nav: [
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        }
      ]
    },
  }