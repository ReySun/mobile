const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader'
    ]
  },
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'less-loader'
    ]
  },
  {
    test: /\.(png|jpg|gif|dpg|webp)$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: "./images/",
        outputPath: "images/"
      }
    }]
  },
  {
    test: /\.(html)$/,
    use: {
      loader: 'html-loader',
      options: {
        attrs: ['img:src', 'img:data-src', 'audio:src'],
        minimize: true
      }
    }
  },
  {
    test: /\.ejs$/,
    loader: 'underscore-template-loader',			     
  },
  {
    test: /\.ts?$/,
    loader: 'awesome-typescript-loader'
  }
]