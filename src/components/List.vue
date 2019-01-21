<template>
  <div class="list">
    <div class="header">
      <h1>列表</h1>
    </div>
    <div class="main-wrapper">
      <div class="item border-bottom" v-for="item in infoList" :key="item.id">
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
          <div class="item-add" @click="addGoods(item)">
            <p class="add">
              <span class="iconfont">&#xe609;</span>
              加入购物车
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      infoList: [],
      totalPrice: 0.00,
      totalNum: 0,
      changeStyle: ''
    }
  },
  methods: {
    ...mapActions(['addGoods']),
    getInfo () {
      axios.get('static/mock/index.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log(data)
        this.infoList = data.infoList
        this.totalPrice = data.totalPrice
        this.totalNum = data.totalNum
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .border-bottom
    &:before
      border-color: #26a2ff
  .list
    overflow: hidden
    .main-wrapper
      width: 100%
      .item
        position: relative
        width: 100%
        display: flex
        padding: .2rem 0 .2rem .5rem
        border-size: border-box
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
          .item-add
            position: absolute
            bottom: .25rem
            right: 1rem
            height: .4rem
            background: #26a2ff
            border-radius: 10rem
            padding: 0 .2rem
            &:active
              background: #FFF
              border: 1px solid #26a2ff
              box-sizing: border-box
            .add
              color: #93999f
              display: inline-block
              vertical-align: top
              text-align: center
              color: #FFF
              line-height: .4rem
              &:active
                color: #26a2ff
</style>
