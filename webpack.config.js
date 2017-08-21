const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const SOURCE_ROOT = 'src/main/resources'

module.exports = {
  entry: {
    app: `./${SOURCE_ROOT}/js/app.js`,
    vendor: ['vue', 'jquery', 'bootstrap', `./${SOURCE_ROOT}/css/simple-sidebar.css`]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.gif$/, loader: 'url-loader?mimetype=image/gif' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery", jquery: "jquery" }),
    new ExtractTextPlugin("css/[name].css")
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: 'build'
  }
}