import * as types from '../mutation-types'
import Api2 from 'Api2'

// initial state
const state = {
  //banner 的 type值
  type: 52,
  banners: []
}

// getters
const getters = {
  banners: state => state.banners
}

// actions
const actions = {
  getBanners ({ commit, dispatch, state }) {
    if (state.banners.length > 0) return
    Api2.banner({
      data: { type: state.type },
      resolve: (data) => {
        if (data.boolen) {
          let arr = []
          data.data.map(item => {
            if (item.img) {
              arr.push({url: item.href, img: item.img.attach.url})
            }
          })
          commit(types.SET_BANNERS, arr)
        }
      },
      reject: (data) => dispatch('addRequestError', data)
    })
  }
}

// mutations
const mutations = {
  [types.SET_BANNERS] (state, obj) {
    state.banners = obj
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
