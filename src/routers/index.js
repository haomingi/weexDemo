/**
 * Created by 001758 on 2017/7/21.
 */
/**
 * Created by xuxin on 16/3/21.
 */
// 路由
//import NewAbout from './revision/about.js'

let routers = []
let defaultRouter = [
  {
    path: '/',
    name: 'home',
    component: function (resolve) {
      require(['./../views/index.vue'], resolve)
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

// 合并路由
routers = Array.prototype.concat(defaultRouter)

export default routers
