// Import Node packages
const path = require('path');
// import path from 'path';

// Import webpack plugins
const WebpackNotifierPlugin = require('webpack-notifier');
// import WebpackNotifierPlugin from 'webpack-notifier';
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// Import paths
const { paths } = require('./paths');
// import { paths } from './paths';

// Import package.json
const PKG = require('../package.json');
// import PKG from '../package.json';

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  target: 'web',
  // The base directory for resolving `entry`
  context: paths.src,

  entry: {
    app: './index.js',
  },

  output: {
    // The bundling output directory (must be absolute path)
    path: paths.build,

    // The output filename of the entry chunk, relative to `path`
    // [name] - Will be set per each key name in `entry`
    filename: '[name].[contenthash].js',

    publicPath: '/',
  },

  module: {
    rules: [
      // Enforcing linting before build
      // The build should fail before it does anything else
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-formatter-friendly'),
          cache: isDevelopment,
          configFile: path.resolve(paths.root, '.eslintrc.json'),
        },
      },

      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      // SVG loader
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  // Customize the webpack build process
  plugins: [
    new WebpackNotifierPlugin({
      title: PKG.description,
      message: 'Compilation done!',
      alwaysNotify: true,
    }),

    new HtmlWebpackPlugin({
      title: PKG.description,
      favicon: `${paths.public}/assets/icons/favicon.ico`,
      template: `${paths.public}/index.html`, // template file
      filename: 'index.html', // output file
      meta: {
        viewport: 'width=device-width, initial-scale=1.0',
        charset: 'UTF-8',
      },
    }),
  ],
};
