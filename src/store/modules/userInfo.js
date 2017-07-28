import * as types from '../mutation-types'
import Api2 from 'Api2'
import userService from 'userService'

const state = {
  user: {},
  refresh: false
}

const getters = {
  getUserInfo: state => state.user,
  getRefreshUserInfo: state => state.refresh
}

const actions = {
  doUserInfo ({commit, dispatch}) {
    return Api2.userInfo({
      resolve: function (data) {
        if (data.boolen) {
          let user = userService.user
          Object.assign(user, data.data)
          userService.setUser(user)
          commit(types.SET_USER_INFO, data.data)
        }
      },
      reject: (data) => dispatch('addRequestError', data)
    })
  }
}

const mutations = {
  [types.SET_USER_INFO] (state, user) {
    state.user = user
  },
  [types.REFRESH_USER_INFO] (state, bool) {
    state.refresh = bool
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
