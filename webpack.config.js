module.exports = {
  entry: './dist/main.min.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
    module: {
      rules: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
              test: /\.(jpe?g|png|gif)$/,
              use: {
                  loader: 'url-loader',
                  options: {
                      limit: 8192,
                      name: "./assets/img/[name].[ext]"
                  }
              }
          }
      ],
    }
}
