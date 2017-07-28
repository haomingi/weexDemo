import * as types from '../mutation-types'
import Api2 from 'Api2'

const state = {
  isNeedIdentify: false
}

const getters = {
  getNeedIdentify: state => state.isNeedIdentify
}

const actions = {
  checkIsNeedIdentify ({commit}) {
    return Api2.IsNeedCode().then(function (data) {
      if (data.boolen) {
        commit(types.SET_IS_NEED_IDENTIFY, data.data.data)
      }
    })
  },
  doLogin ({commit, dispatch}, data) {
    return Api2.login({
      data: data,
      method: 'post',
      resolve: function (data) {
        if (!data.boolen) {
          if (parseInt(data.data) >= 3) {
            commit(types.SET_IS_NEED_IDENTIFY, 1)
          }
        }
      }
    })
  }
}

const mutations = {
  [types.SET_IS_NEED_IDENTIFY] (state, isNeedIdentify) {
    state.isNeedIdentify = !!parseInt(isNeedIdentify)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
