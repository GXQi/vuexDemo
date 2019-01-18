<template>
  <div class="list">
    111
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
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
</style>
