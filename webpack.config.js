module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/src/dist',
    filename: 'bundle.js'
  },
    module: {
      rules: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
      ],
    }
}
