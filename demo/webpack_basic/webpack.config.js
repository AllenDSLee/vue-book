var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
  entry:{
    main:'./main'
  },
  output:{
    path:path.join(__dirname, './dist'),
    publicPath:'/dist/',
    filename:'main.js'
  },
  module:{
    rules:[
      {
        test:/\.vue$/i,
        loader:'vue-loader',
        options:{
          loaders:{
            css:MiniCssExtractPlugin.loader
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/i,
        loader:'babel-loader',
        exclude:/node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin("main.css"),
  ]
}

// export default config;
module.exports = config;