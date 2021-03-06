const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module : {
        rules : [
            {test: /\.(js)$/, use: 'babel-loader'},
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: 'src/template/index.html'
        })
    ]
  };