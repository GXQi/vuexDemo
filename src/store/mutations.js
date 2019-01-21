const mutation = {
  addGoods (state, info) {
    let isOwn = state.arr.some(item => {
      if (item.id === info.id) {
        item.num++
        return true
      } else {
        return false
      }
    })
    if (!isOwn) {
      state.arr.push({id: info.id, imgUrl: info.imgUrl, name: info.name, hint: info.hint, price: info.price, num: 1})
    }
  },
  deleteGoods (state, index) {
    state.arr.splice(index, 1)
  },
  addNum (state, index) {
    state.arr[index].num++
  },
  reduceNum (state, index) {
    if (state.arr[index].num === 1) {
      state.arr.splice(index, 1)
    } else {
      state.arr[index].num--
    }
  }
}

export default mutation
