import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ShellUI/',
  title: "ShellUI",
  description: "A clean custom UI framework for Roblox.",
  
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/getting-started' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          // Changed '/resources/index' to '/resources/' so VitePress handles the index route cleanly
          { text: "Why?", link: '/resources/' }, 
          { text: 'Getting Started', link: '/resources/getting-started' }, 
          { text: "Installation", link: "/resources/installation" },
          { text: "Setting Up", link: "/resources/setting-up" }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'API', link: '/api/' },
          { text: 'Components', link: '/api/components' },
          { text: 'Mounting Function', link: '/api/mounttoscreenfunction' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zayddd666/ShellUI' }
    ]
  }
})