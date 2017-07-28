var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var aliasConfig = require('./aliasConfig')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getBaseConfig () {
  return {
    entry: [
      path.resolve('src', 'main.js')
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      modules: [
        resolve('node_modules')
      ],
      alias: aliasConfig
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue(\?[^?]+)?$/,
          loaders: []
        },
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: "pre",
          options: {
            formatter: require('eslint-friendly-formatter')
          },
          exclude: [/node_modules/, path.resolve(resolve('/src/filters'))]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: './../dist/index.html',
        template: 'index.html',
        inject: true
      })
    ]
  }
}

//module.exports = getBaseConfig
var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.rules[1].loaders.push('vue-loader')

var nativeConfig = getBaseConfig()
nativeConfig.output.filename = '[name].weex.js'
nativeConfig.module.rules[1].loaders.push('weex-loader')

module.exports = [webConfig, nativeConfig]
