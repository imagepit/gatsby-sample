module.exports = {
  siteMetadata: {
    title: "はじめてのGatsby Site",
    author: "Ryosuke Takahashi",
    categories: [
      {
        slug: "system-design",
        title: "システム設計",
        description: "システム設計についての学習",
      },
      {
        slug: "programing",
        title: "プログラミング",
        description: "プログラミングについての使い方の学習",
      },
      {
        slug: "software",
        title: "ソフトウェア・フレームワーク",
        description: "ソフトウェア・フレームワークについての使い方の学習",
      },
    ],
    user: { name: "John Doe", email: "john@example.com" },
  },
  plugins: [
    // styled components
    `gatsby-plugin-styled-components`,
    // set md file directory
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    // remark
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          'gatsby-remark-relative-images',
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-images-remote`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    // mdx
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-images-remote`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    // sass css modules
    `gatsby-plugin-sass`,
    // image
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
};

