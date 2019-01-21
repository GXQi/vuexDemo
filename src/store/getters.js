const getter = {
  totalPrice (state) {
    let money = 0
    for (let i = 0; i < state.arr.length; i++) {
      money += parseFloat(state.arr[i].price * state.arr[i].num)
    }
    return money
  },
  totalNum (state) {
    let num = 0
    for (let i = 0; i < state.arr.length; i++) {
      num += state.arr[i].num
    }
    return num
  }
}

export default getter
