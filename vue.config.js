const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "src/assets/scss", to: "styles/" },
          { from: "src/plugins", to: "plugins/" },
          { from: "src/store", to: "store/" }
        ],
      }),
    ],
  },
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/_variables.scss";',
      },
    },
  },
};