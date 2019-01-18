<template>
  <div class="list">
    <div class="header">
        <h1>列表</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      infoList: [],
      totalPrice: 0.00,
      totalNum: 0
    }
  },
  methods: {
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
.list
  .header
    padding: 10px 0
    background: #26a2ff
    font-size: 20px
    color: #FFF
    h1
      text-align: center
      font-weight: 600
</style>
