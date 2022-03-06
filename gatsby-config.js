module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    // styled components
    `gatsby-plugin-styled-components`,
    // set md file directory
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
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
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // sass css modules
    `gatsby-plugin-sass`,
    // image
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};

