const actions = {
  addGoods ({commit}, params) {
    commit('addGoods', params)
  },
  deleteGoods ({commit}, params) {
    commit('deleteGoods', params)
  },
  addNum ({commit}, index) {
    commit('addNum', index)
  },
  reduceNum ({commit}, index) {
    commit('reduceNum', index)
  }
}

export default actions
