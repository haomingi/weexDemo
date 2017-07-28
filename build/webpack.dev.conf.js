/*
* 本地环境中修改的webpack配置文件
* */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')
// 引入基本配置
var config = require('./webpack.config')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

config[0].output.publicPath = '/'
config[0].plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  }),
  new FriendlyErrorsPlugin()
]
// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = './build/dev-client'
var extras = [devClient]
config[0].entry = extras.concat(config[0].entry)

module.exports = config[0]