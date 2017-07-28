import * as types from '../mutation-types'

// initial state
const state = {
  //banner 的 type值
  errors: []
}

// getters
const getters = {
  errors: state => state.errors
}

// actions
const actions = {
  addRequestError ({ commit }, errObj) {
    commit(types.ADD_REQUEST_ERROR, errObj)
  }
}

// mutations
const mutations = {
  [types.ADD_REQUEST_ERROR] (state, obj) {
    state.errors.push(obj)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
