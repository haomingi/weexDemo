import Vue from 'vue'
import Router from 'vue-router'
import routes from '../routers'

Vue.use(Router)

// Story view factory
//function createStoriesView (type) {
//  return {
//    name: `${type}-stories-view`,
//    render (createElement) {
//      return createElement(StoriesView, { props: { type }})
//    }
//  }
//}

let router = new Router({
  // mode: 'abstract',
  routes,
  linkActiveClass: ''
})

export default router
