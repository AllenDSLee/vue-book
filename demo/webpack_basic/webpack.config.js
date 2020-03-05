const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
        loader:'vue-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/i,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.(gif|jpg|png)\??.*$/,
        loader:'url-loader',
        options: {
          limit: 1024,
          esModule: false
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin("main.css"),
    new VueLoaderPlugin()
  ]
}

// export default config;
module.exports = config;