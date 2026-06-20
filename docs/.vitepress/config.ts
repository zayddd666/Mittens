import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "ShellUI",
  description: "A clean custom UI framework for Roblox.",
  
  themeConfig: {
    logo: '/logo.png',

    // Fixes topbar text to exactly "API"
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/getting-started' },
      { text: 'API', link: '/api/' }
    ],

    // Automatically scans directories so every markdown file shows up
    sidebar: generateSidebar([
      {
        documentRootPath: 'docs',
        scanStartPath: 'resources',
        resolvePath: '/resources/',
        useTitleFromFileHeading: true,
        hyphenToSpace: true
      },
      {
        documentRootPath: 'docs',
        scanStartPath: 'api',
        resolvePath: '/api/',
        useTitleFromFileHeading: true,
        hyphenToSpace: true
      }
    ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zayddd666/ShellUI' }
    ]
  }
})