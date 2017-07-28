const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js',
    pathinfo: true,
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              compact: false,
              plugins: ['transform-react-jsx']
            }
          }
        ]
      },
      {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
      { test: /\.svg$/, use: 'svg-inline-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: __dirname + '/index.html'})
  ]
};

module.exports = config;
