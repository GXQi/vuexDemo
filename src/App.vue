<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <router-link to="/" class="router-menu">
        <div class="footer-item">
          <i class="iconfont">&#xe655;</i>列表
        </div>
      </router-link>
      <router-link to="/cart" class="router-menu">
        <div class="footer-item">
          <i class="iconfont">&#xe63f;</i>购物车
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="stylus">
  #app
    .footer
      position: fixed
      display: flex
      bottom: 0
      width: 100%
      padding: .15rem 0 .1rem 0
      background: rgba(38, 162, 255, .2)
      .router-menu
        flex: 1
        width: 50%
        .footer-item
          text-align: center
          font-size: .15rem
          .iconfont
            display: block
            color: #26a2ff
            font-size: .4rem
            padding-bottom: .12rem
</style>
