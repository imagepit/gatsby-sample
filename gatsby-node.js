const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  // const result = await graphql(`
  //   allMarkdownRemark {
  //     nodes {
  //       id
  //     }
  //   }
  // `);

  // if (result.errors) {
  //   throw new Error(result.errors);
  // }
  // const { allPosts } = result.data;
  // actions.setWebpackConfig({
  //   resolve: {
  //     plugins: [new TsconfigPathsPlugin()],
  //   },
  // });
};
