const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
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

  resolve: {
    extensions: ['.js', '.jsx']
  },

  mode: 'production',

  // will not bundle node modules
  externals: [externals()],

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/,
      }
    ]
  }
}