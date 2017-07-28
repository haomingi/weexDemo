var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
var config = require('./config')
//代理地址
var proxyTable = config.dev.proxyTable

// 创建一个express实例
var app = express()
// 调用webpack并把配置传递过去
var compiler = webpack(webpackConfig)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

// 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    // 发布事件
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})
// 注册中间件
app.use(devMiddleware)
app.use(hotMiddleware)

// 监听 9999端口，开启服务器
app.listen(9191, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:9191')
})