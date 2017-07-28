import * as types from '../mutation-types'
//import Api2 from 'Api2'

const state = {
  userAccount: {}
}

const getters = {
  getUserAccount: state => state.userAccount
}

const actions = {
  doUserAccount ({commit, dispatch}) {
    //return Api2.userAccount({
    //  resolve: function (data) {
    //    if (data.boolen) {
    //      commit(types.SET_USER_ACCOUNT, data.data)
    //    }
    //  },
    //  reject: (data) => dispatch('addRequestError', data)
    //})
  }
}

const mutations = {
  [types.SET_USER_ACCOUNT] (state, data) {
    state.userAccount = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
