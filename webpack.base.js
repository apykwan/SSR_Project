module.exports = {
  // So webpack doesn’t need to guess which file you’re referring to 
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },

        //  Prevents unnecessary processing (like transpiling) of node_modules files with Babel
        exclude: /node_modules/,
      }
    ]
  }
};