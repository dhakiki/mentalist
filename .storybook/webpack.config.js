const webpackConfig = require('../webpack.config')

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: webpackConfig.module.rules
  },
};
