const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'HTTPQ',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Quickstart, guide and overview of HTTPQ, the open source webhooks sending server.",
  base: "/httpq-docs/",
  dest: "docs",
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#346c54' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/httpq-labs/httpq-docs',
    editLinks: true,
    docsDir: 'src',
    docsBranch: 'main',
    editLinkText: 'edit',
    lastUpdated: true,
    logo: '/smologo.jpg',
    nav: [
      {
        text: 'Overview',
        link: '/overview/',
      },
      {
        text: 'Quick Start',
        link: '/quickstart/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      }
    ],
    sidebar: {
      '/overview/': [
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '',
            'why-httpq',
            'key-features',
            'benchmarks'
          ]
        }
      ],
      '/guide/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            'install',
            'settings',
            'dependencies',
            'tenancy',
            'auth',
          ]
        },
        {
          title: 'Designing Webhooks',
          collapsable: false,
          children: [
            'api-versioning',
            'topics',
            'consumers',
            'subscriptions'
          ]
        },
        {
          title: 'Ops guide',
          collapsable: false,
          children: [
            'high-availability',
            'scaling-out',
            'monitoring'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
