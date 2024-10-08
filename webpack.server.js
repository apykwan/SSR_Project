const path = require('path');
const externals = require('webpack-node-externals');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we are building a bundle 
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  mode: 'production',

  // will not bundle node modules
  externals: [externals()],
};

module.exports = merge(baseConfig, config);