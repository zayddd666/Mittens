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
      
      {
        text: 'API',
        items: [
          { text: 'Configuration', link: '/components/' },
          { text: 'Glossary', link: '/configuration/' },
          { text: 'Mounting', link: '/api/mounttoscreenfunction' }
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