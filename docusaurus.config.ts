import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Many Zeros',
  tagline: 'Gas-optimized vanity Ethereum addresses for smart contracts.',
  favicon: 'img/favicon.ico',

  // Production url of the docs site. Used for canonical URLs, og:url and the
  // generated sitemap — must be correct or search engines index the wrong host.
  url: 'https://docs.manyzeros.xyz',
  baseUrl: '/',

  organizationName: 'DimiDumo',
  projectName: 'manyzeros-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/DimiDumo/manyzeros-docs/tree/main/',
          routeBasePath: '/', // Make docs available at root
        },
        // No blog on the docs site.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        // Disable the landing page
        pages: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark', // default theme mode
      disableSwitch: false, // allow users to switch themes manually
      respectPrefersColorScheme: true, // enable syncing with the system theme
    },
    image: 'img/preview.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'vanity address, ethereum, leading zeros, gas optimization, create3, smart contract, ERC-721',
      },
    ],
    navbar: {
      title: 'Many Zeros',
      logo: {
        alt: 'Many Zeros Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Philogy/sub-zero-contracts',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://manyzeros.xyz/12',
          label: 'Buy an address ↗',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Many Zeros',
          items: [
            { label: 'Buy an address', href: 'https://manyzeros.xyz/12' },
            { label: 'Custom address', href: 'https://manyzeros.xyz/custom' },
            { label: 'My addresses', href: 'https://manyzeros.xyz/wallet' },
            { label: 'FAQ', href: 'https://manyzeros.xyz/faq/why' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/Philogy/sub-zero-contracts' },
            { label: 'Telegram', href: 'https://t.me/tokenized_b00bs' },
          ],
        },
      ],
      copyright: `Many Zeros · <a href="https://manyzeros.xyz">manyzeros.xyz</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
