// Import webpack
const webpack = require('webpack');
// import webpack from 'webpack';

// Import webpack plugins
const { merge: webpackMerge } = require('webpack-merge');
// import { merge as webpackMerge } from 'webpack-merge';

// Import common configuration
const baseConfig = require('./webpack.config.base.babel');
// import baseConfig from './webpack.config.base.babel';

const { paths } = require('./paths');
// import { paths } from './paths';

// export default webpackMerge(baseConfig, {
module.exports = webpackMerge(baseConfig, {
  mode: 'development',

  // Control how source maps are generated
  devtool: false,

  // Spin up a server for quick development
  devServer: {
    open: false,

    port: 8080,

    static: {
      directory: paths.public,
    },

    // Enable gzip compression of generated files.
    compress: true,

    historyApiFallback: true,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});
