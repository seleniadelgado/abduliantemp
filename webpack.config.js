const path = require('path');
module.exports = {
  entry: './dist/main.min.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
    module: {
      rules: [
          // { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
          // {
          //     test: /\.(jpe?g|png|gif)$/,
          //     use: {
          //         loader: 'url-loader',
          //         options: {
          //             limit: 8192,
          //             name: "./assets/img/[name].[ext]"
          //         }
          //     }
          // }
      ],
    }
}
