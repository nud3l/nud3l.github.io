// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {() => Promise<import('@docusaurus/types').Config>} */
module.exports = async function createConfigAsync() {
  const math = (await import('remark-math')).default;
  const katex = (await import('rehype-katex')).default;

  return {
    title: 'Navigating Blocks and Chains',
    tagline: 'A Personal Perspective on the Web3 Space',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://harz.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'nud3l', // Usually your GitHub org/user name.
    projectName: 'nud3l.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages', // Branch that GitHub pages will deploy from.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: false,
          blog: {
            showReadingTime: true,
            editUrl:
              'https://github.com/nud3l/nud3l.github.io/',
            blogSidebarTitle: 'All posts',
            blogSidebarCount: 'ALL',
            remarkPlugins: [math],
            rehypePlugins: [katex],
          },
          theme: {
            customCss: './src/css/custom.css',
          },
        }),
      ],
    ],
    plugins: [
      'docusaurus-plugin-goatcounter'
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/header.jpg',
        navbar: {
          title: 'Home',
          items: [
            {
              to: '/blog',
              label: 'Blog',
              position: 'left',
            },
            {
              to: '/publications',
              label: 'Publications',
              position: 'left',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Contact',
              items: [
                {
                  label: 'Twitter',
                  href: 'https://x.com/dom60808',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/nud3l',
                },
                {
                  label: 'StackExchange',
                  href: 'https://stackexchange.com/users/9738481/dominik-harz',
                },
              ],
            },
          ],
          copyright: `© ${new Date().getFullYear()} Dominik Harz`,
        },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        prism: {
          additionalLanguages: ['solidity', 'rust'],
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        goatcounter: {
          code: 'harz_dev',
        },
      }),
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-GvrOXuhMATgEsSwCs4smOFZETtY0GPSDNNnoGn0vu99EC3Wrt47LNJi6nHM4A8za',
        crossorigin: 'anonymous',
      },
    ],
  };
};
