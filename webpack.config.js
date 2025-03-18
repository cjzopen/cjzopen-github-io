const path = require('path');


module.exports = {
  entry: path.resolve(__dirname, 'src/data2.js'),
  // entry: './src/data2.js',
  output: {
    path: path.resolve(__dirname, 'anime/season/'),
    filename: 'data2.js',
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
        // include: path.resolve(__dirname, 'src')
      },
    ]
  }
}    