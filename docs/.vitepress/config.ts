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

    // GLOBAL SIDEBAR: Organized in the correct sequential order
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: "Why?", link: '/resources/index' }, // Moved to the top so it's first
          { text: 'Getting Started', link: '/resources/getting-started' }, // Now "Next Page" will correctly say Getting Started
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