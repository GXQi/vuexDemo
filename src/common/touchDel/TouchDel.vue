<template>
  <div class="delete">
    <div class="slider">
      <div
        class="content"
        @touchstart='touchStart'
        @touchmove='touchMove'
        @touchend='touchEnd'
        :style="deleteSlider"
      >
        <slot></slot>
      </div>
      <div class="remove active" ref='remove' @click="handleClick">
        删除
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    propE: {
      type: Object,
      default: function () {
      }
    }
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
    handleClick (v) {
      this.$emit('msg-from-child', this.val)
      this.deleteSlider = 'transform:translateX(0px)'
    },
    touchStart (ev) {
      console.log(ev)
      ev = ev || event
      if (ev.touches.length === 1) {
        this.startX = ev.touches[0].clientX
      }
    },
    touchMove (ev) {
      ev = ev || event
      let wd = this.$refs.remove.offsetWidth
      if (ev.touches.length === 1) {
        this.moveX = ev.touches[0].clientX
        this.disX = this.startX - this.moveX
        if (this.disX < 0 || this.disX === 0) {
          this.deleteSlider = 'transform:translateX(0px)'
        } else if (this.disX > 0) {
          this.deleteSlider = 'transform:translateX(-' + this.disX * 5 + 'px)'
          if (this.disX * 5 >= wd) {
            this.deleteSlider = 'transform:translateX(-' + wd + 'px)'
          }
        }
      }
    },
    touchEnd (ev) {
      ev = ev || event
      console.log(ev)
      let wd = this.$refs.remove.offsetWidth
      if (ev.changedTouches.length === 1) {
        let endX = ev.changedTouches[0].clientX
        this.disX = this.startX - endX
        if ((this.disX * 5) < (wd / 2)) {
          this.deleteSlider = 'transform:translateX(0px)'
        } else {
          this.deleteSlider = 'transform:translateX(-' + wd + 'px)'
        }
      }
    }
  }
}
</script>
<style scoped lang="stylus">
  .slider
    width: 100%
    height: 100px
    position: relative
    .content
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      background: #fff
      z-index: 1
      transition: 0.3s
    .remove
      position: absolute
      width:100px
      height:100px
      background:red
      right: 0
      top: 0
      color:#fff
      text-align: center
      font-size: 32px
      line-height: 100px
</style>
