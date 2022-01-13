const path = require('path');
// import path from 'path';

module.exports.paths = {
  // Root folder
  root: path.resolve(__dirname, '..'),

  // Source folder
  src: path.resolve(__dirname, '../src'),

  // Production ready build
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),
};
