<template>
  <div id="cart">
    <div class="header">
      <h1>购物车</h1>
    </div>
    <div class="main-wrapper">
      <div class="item-empty" v-if="arr.length == 0">
        购物车为空
      </div>
      <div  class="item border-bottom" v-for="(item, index) in arr" v-else>
        <div class="item-cartInfo" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="deleteSlider">
          <div class="item-img">
            <img :src="item.imgUrl" alt="商品图片">
          </div>
          <div class="item-info">
            <div class="item-name">
              <p class="name">{{ item.name }}</p>
            </div>
            <div class="item-hint">
              <p class="hint">{{ item.hint }}</p>
            </div>
            <div class="item-price">
              <p class="price">￥<span>{{ item.price }}</span></p>
            </div>
            <div class="item-num">
              <span
                class="iconfont"
                v-show="item.num != 0"
                @click="reduceNum(index)"
              >&#xe628;</span>
              <span class="num" v-show="item.num != 0">{{ item.num }}</span>
              <span
                class="iconfont"
                @click="addNum(index)"
              >&#xe612;</span>
            </div>
          </div>
        </div>
        <div class="item-del" ref="remove" @click="deleteGoods(index)">删除</div>
      </div>
      <div class="cart-totalNum border-top" v-show="arr.length > 0">
        <p class="totalNum">总计：￥{{ totalNum }}</p>
      </div>
      <div class="cart-totalPrice" v-show="arr.length > 0">
          <p class="totalPrice">总计：￥{{ totalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import TouchDel from '@/common/touchDel/TouchDel'
export default {
  name: 'Cart',
  components: {
    TouchDel
  },
  data () {
    return {
      startX: 0,
      endX: 0,
      moveX: 0,
      disX: 0,
      deleteSlider: ''
    }
  },
  methods: {
    ...mapActions(['deleteGoods', 'addNum', 'reduceNum']),
    touchStart (ev) {
      ev = ev || event
      if (ev.touches.length == 1) {
        this.startX = ev.touches[0].clientX
      }
    },
    touchEnd (ev) {
      ev = ev || event
      let wd = this.$refs.remove[0].offsetWidth
      if (ev.changedTouches.length == 1) {
        this.endX = ev.changedTouches[0].clientX
        this.disX = this.startX - this.endX
        if ((this.disX * 5) < (wd /2)) {
          this.deleteSlider = "transform:translateX(0px)"
        } else {
          this.deleteSlider = "transform:translateX(-" + wd + "px)"
        }
      }
    },
    touchMove (ev) {
      ev = ev || event
      let wd = this.$refs.remove[0].offsetWidth
      if (ev.touches.length == 1) {
        this.moveX = ev.touches[0].clientX
        this.disX = this.startX- this.moveX
        if (this.disX < 0 || this.disX == 0) {
          this.deleteSlider = "transform:translateX(0px)"
        } else if (this.disX > 0) {
          this.deleteSlider = "transform:translateX(-" + this.disX*5 + "px)"
          if (this.disX*5 >= wd) {
            this.deleteSlider = "transform:translateX(-" + wd + "px)"
          }
        }
      }
    }
  },
  computed: {
    ...mapState(['arr']),
    ...mapGetters(['totalPrice', 'totalNum'])
  }
}
</script>

<style scoped lang="stylus">
  .border-top
    &:before
      border-color: #26a2ff
  #cart
    overflow: hidden
    .main-wrapper
      width: 100%
      box-sizing: border-box
      .item-empty
        color: #26a2ff
        margin-top: 1rem
        text-align: center
        font-size: .4rem
      .item
        width: 100%
        box-sizing: border-box
        .item-cartInfo
          padding: .2rem 0 .2rem .5rem
          display: flex
          position: relative
          background: #FFF
          z-index: 1
          .item-img
            width: 1.5rem
            overflow: hidden
            img
              display: block
              width: 100%
          .item-info
            flex: 1
            padding-left: .3rem
            .item-name
              padding-bottom: .1rem
              .name
                color: #07111b
                font-size: .2.5rem
                font-weight: 700
                line-height: .4rem
            .item-hint
              padding-bottom: .2rem
              .hint
                color: #93999f
                line-height: .4rem
            .item-price
              .price
                color: #f01414
                line-height: .4rem
                span
                  font-size: .3rem
                  font-weight: 600
            .item-num
              position: absolute
              bottom: .25rem
              right: .5rem
              .iconfont
                font-size: .4rem
                color: #26a2ff
                display: inline-block
                padding: 0 .15rem
              .num
                color: #93999f
                display: inline-block
                vertical-align: top
                text-align: center
                padding-top: .07rem
        .item-del
          position: absolute
          display: flex
          align-items: Center
          justify-content: Center
          right: 0
          top: 0
          width: 1.5rem
          height: 100%
          color: #FFF
          font-weight: bold
          font-size: .4rem
          background: #FF0000
      .cart-totalNum, .cart-totalPrice
        width: 100%
        margin-top: .4rem
        padding-top: .4rem
        padding-left: .5rem
        font-size: .35rem
        color: #26a2ff
</style>
