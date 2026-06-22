import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  base: '/ShellUI/',
  title: "ShellUI",
  description: "A clean custom UI framework for Roblox.",
  
  head: [
    // This bakes a fallback light-blue shell/cube icon directly into the code so it never returns blank
    ['link', { 
      rel: 'icon', 
      type: 'image/svg+xml', 
      href: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%237dd3fc"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' 
    }],
    
    // Navbar Fix: Prevents the logo from stretching out
    [
      'style',
      {},
      `
      .VPNavBar .logo {
        object-fit: contain !important;
        width: auto !important;
        height: 24px !important;
      }
      `
    ]
  ],
  
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