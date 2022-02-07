module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    // マークダウンを格納しているフォルダを指定する
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/posts`,
      },
    }, 
    // マークダウン関連の設定    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images'
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            }
          }
        ],
      }
    }
  ],
};
