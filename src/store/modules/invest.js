import * as types from '../mutation-types'
import Api2 from 'Api2'

const state = {
  recommends: []
}

const getters = {
  recommends: state => state.recommends
}

const actions = {
  getRecommends ({ commit, dispatch, state }) {
    if (state.recommends.length > 0) return
    Api2.recommendInvestNew({
      resolve: (data) => {
        data.boolen && commit(types.SET_RECOMMENDS, data.data.prjList)
      },
      reject: (data) => dispatch('addRequestError', data)
    })
  }
}

const mutations = {
  [types.SET_RECOMMENDS] (state, obj) {
    state.recommends = obj
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
