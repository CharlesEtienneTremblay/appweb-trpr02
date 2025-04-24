import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Travail pratique 2",
  description: "La documentation du travail pratique 2 de Charles-Étienne Tremblay",
  base: '/appweb-trpr02/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Première révision', link: '/premiere-revision' },
      { text: 'Deuxième révision', link: '/deuxieme-revision' }
    ],

    sidebar: [
      {
        text: 'Première révision', link: '/premiere-revision'
      },
      {
        text: 'Deuxième révision', link: '/deuxieme-revision'
      }
    ]
  }
})
