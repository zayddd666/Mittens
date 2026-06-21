import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  base: '/ShellUI/',
  title: "ShellUI",
  description: "A clean custom UI framework for Roblox.",
  
  markdown: {
    config: (md) => {
      md.use(tabsMarkdownPlugin)
    }
  },

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/getting-started' },
      { text: 'API', link: '/api/' },
      
      {
        text: 'Configuration',
        items: [
          { text: 'Configuration', link: '/components/' }, // ➜ Opens your components/index.md page directly
          { text: 'Glossary', link: '/configuration/' }     // ➜ Opens your configuration/index.md glossary page
        ]
      }
    ],

    sidebar: {
      '/resources/': [
        {
          text: 'Introduction',
          items: [
            { text: "Why?", link: '/resources/' }, 
            { text: 'Getting Started', link: '/resources/getting-started' }, 
            { text: "Installation", link: "/resources/installation" },
            { text: "Setting Up", link: "/resources/setting-up" }
          ]
        }
      ],

      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Mounting Function', link: '/api/mounttoscreenfunction' }
          ]
        }
      ],

      // This sidebar handles the big component list (shared when viewing components or the config fallback)
      '/components/': [
        {
          text: 'UI Components',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'AspectRatio', link: '/components/aspectratio' },
            { text: 'Button', link: '/components/button' },
            { text: 'Corner', link: '/components/corner' },
            { text: 'Frame', link: '/components/Frame' },
            { text: 'Label', link: '/components/label' },
            { text: 'List', link: '/components/list' },
            { text: 'Stroke', link: '/components/stroke' },
            { text: 'TextInput', link: '/components/textinput' }
          ]
        }
      ],

      // ➜ STRICT FIX FOR THE GLOSSARY SIDEBAR
      // This forces VitePress to only display ONE link when viewing configuration/index.md
      '/configuration/': [
        {
          text: 'Component Glossary',
          items: [
            { text: 'Glossary', link: '/configuration/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zayddd666/ShellUI' }
    ]
  }
})