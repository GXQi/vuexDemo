<template>
  <div id="cart">
    <div class="header">
      <h1>购物车</h1>
    </div>
    <div class="main-wrapper">
      <div class="item border-bottom" data-type="0">
        <div class="item-cartInfo" @touchstart="touchStart" @touchend.capture="touchEnd">
          <div class="item-img">
            <img src="" alt="商品图片">
          </div>
          <div class="item-info">
            <div class="item-name">
              <p class="name">name</p>
            </div>
            <div class="item-hint">
              <p class="hint">hint</p>
            </div>
            <div class="item-price">
              <p class="price">￥<span>10</span></p>
            </div>
            <div class="item-add">
              <p class="add">
                <i class="iconfont">&#xe609;</i>
                添加
              </p>
            </div>
          </div>
        </div>
        <div class="item-del" @click="deleteItem">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      infoList: [],
      startX : 0,
      endX : 0
    }
  },
  methods: {
    touchStart (e) {
      this.startX = e.touches[0].clientX
    },
    touchEnd (e) {
      let parentElement = e.currentTarget.parentElement
      this.endX = e.changedTouches[0].clientX
      console.log(parentElement.dataset.type)
      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        this.restSlide()
        parentElement.dataset.type = 1
      }
      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        console.log('111')
        this.restSlide()
        parentElement.dataset.type = 0
      }
      this.startX = 0
      this.endX = 0
    },
    checkSlide () {
      let listItems = document.querySelectorAll('.item')
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].dataset.type === 1) {
          return true
        }
      }
      return false
    },
    restSlide () {
      let listItems = document.querySelectorAll('.item')
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = 0
      }
    },
    deleteItem (e) {
      let index = e.currentTarget.dataset.index
      this.restSlide()
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="stylus">
  #cart
    .main-wrapper
      .item
        position: relative
        .item-cartInfo
          flex: 1
          display: inline-block
        .item-del
          position: absolute
          right: -1.5rem
          width: 1.5rem
          height: 100%
          background: #FF4949
          display: inline-block
</style>
