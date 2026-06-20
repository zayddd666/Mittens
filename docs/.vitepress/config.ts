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
      { text: 'API Reference', link: '/api/' }
    ],

// Sets up multi-sidebar tracking for your folders
    sidebar: {
      '/resources/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/resources/getting-started' },
            // Add any other resource files here, for example:
            // { text: 'Installation', link: '/resources/installation' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            // Add your custom framework system components here:
            { text: 'Conch Terminal', link: '/api/conch' },
            { text: 'BitAntiCheat', link: '/api/bitanticheat' },
            { text: 'Mittens UI', link: '/api/mittens' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zayddd666/ShellUI' }
    ]
  }
})// Force rebuild trigger
