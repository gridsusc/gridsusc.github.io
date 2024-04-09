import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: 'GRIDS - Graduates Rising in Data Science',
  tagline: 'Join USCs #1 Data Science Club',
  favicon: 'img/logo.png',


  // Set the production url of your site here
  url: 'https://gridsusc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GRIDS', // Usually your GitHub org/user name.
  projectName: 'GRIDS @ USC', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [tailwindPlugin],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'events',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "blogs"
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'GRIDS USC',
      logo: {
        alt: 'GRIDS USC',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Events',
        },
        {to: '/blogs', label: 'Blogs', position: 'right'},
        {to: '/team', label: 'About Us', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore the Site',
          items: [
            {
              label: 'Blogs',
              to: '/blogs',
            },
            {
              label: 'Events',
              to: '/events',
            },
            {
              label: 'Subscribe to our newsletter',
              to: '/#newsletter',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'EngageSC',
              href: 'https://engage.usc.edu/Grids/club_signup',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/gridsusc/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gridsusc',
            },
          ],
        },
        {
          title: 'GRIDS @ USC',
          items: [
            {
              label: 'About Us',
              to: '/team',
            },
            {
              label: 'Email',
              href: 'mailto:grids@usc.edu',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/gridsusc/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GRIDS USC`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
