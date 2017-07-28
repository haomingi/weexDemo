/**
 * Created by 001758 on 2017/7/24.
 */
var path = require('path')
var localConf = {}
try {
  localConf = require('./local')
} catch (e) {
  if (process.env.NODE_ENV === 'development') {
    console.log('build目录下无local.js文件')
  }
}
// 代理地址
var target = localConf.proxyHost
// 埋点代理地址
var tracklogtarget = localConf.tracklogtarget
// 活动代理地址
var targetHd = localConf.targetHd

module.exports = {
  build: {
  },
  //测试环境
  test: {
  },
  dev: {
    env: require('./dev.env'),
    port: 9191,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/Mobile2': {
        target: target,
        changeOrigin: true,
        pathRewrite: {
          '^/Mobile2': '/Mobile2'
        }
      },
      // 投资详情页里的投资协议
      '/Index': {
        target: target,
        changeOrigin: true,
        pathRewrite: {
          '^/Index': '/Index'
        }
      },
      '/Public': {
        target: target,
        changeOrigin: true,
        pathRewrite: {
          '^/Public': '/Public'
        }
      },
      '/Weixin': {
        target: target,
        changeOrigin: true,
        pathRewrite: {
          '^/Weixin': '/Weixin'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}