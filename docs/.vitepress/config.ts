import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ShellUI/',
  title: "ShellUI",
  description: "A clean custom UI framework for Roblox.",
  
  themeConfig: {
    logo: '/logo.png',

    // Topbar layout with the API label fixed
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/getting-started' },
      { text: 'API', link: '/api/' }
    ],

    // GLOBAL SIDEBAR: This makes ALL sections visible on every single page
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/resources/getting-started' },
          { text: "Why?", link: '/resources/index' },
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