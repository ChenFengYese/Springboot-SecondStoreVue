
<template>
  <div :class="['m-slider', { disabled: disabled }]" @click="onClickPoint" ref="slider" :style="`width: ${width}px;`">
    <div class="u-slider-rail"></div>
    <div class="u-slider-track" :style="`left: ${left}px; right: auto; width: ${right - left}px;`"></div>
    <div class="u-slider-handle" v-if="range" tabindex="0" ref="left" @mousedown="onLeftMouseDown" :style="`left: ${left}px; right: auto; transform: translateX(-50%);`"></div>
    <div class="u-slider-handle" tabindex="0" ref="right" @mousedown="onRightMouseDown" :style="`left: ${right}px; right: auto; transform: translateX(-50%);`"></div>
  </div>
</template>
<script>
import NumSlider from '@/components/NumSlider'
export default {
  name: 'NumSlider',
  props: {
    min: { // 滑动输入条最小值
      type: Number,
      default: 0
    },
    max: { // 滑动输入条最大值
      type: Number,
      default: 100
    },
    initialMin: { // 滑动输入条初始最小值，默认在最左侧
      type: Number,
      default: 0
    },
    initialMax: { // 滑动输入条初始最大值，默认在最右侧
      type: Number,
      default: 100
    },
    width: { // 滑动输入条在页面中的宽度
      type: Number,
      default: 600
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    },
    range: { // 是否双滑块模式
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      left: '', // 左滑块距离滑动条左端的距离
      right: '', // 右滑动距离滑动条左端的距离
    }
  },
  computed: {
    scale () {
      return this.width / (this.max - this.min)
    },
    low () {
      return Math.round(this.left / this.scale + this.min)
    },
    high () {
      return Math.round(this.right / this.scale + this.min)
    }
  },
  watch: {
    low (to) {
      this.$emit('lowChange', to) // 左滑块对应数字回调
    },
    high (to) {
      this.$emit('highChange', to) // 右滑块对应数字回调
    }
  },
  mounted () {
    this.left = this.range ? (this.initialMin - this.min) * this.scale : 0
    this.right = (this.initialMax - this.min) * this.scale
  },
  methods: {
    onClickPoint (e) { // 点击滑动条，移动滑块
      // 元素是absolute时，e.layerX是相对于自身元素左上角的水平位置
      var moveX = e.layerX // 鼠标点击位置距离滑动输入条左端的水平距离
      if (this.range) { // 双滑块模式
        if (moveX <= this.left) {
          this.left = moveX
        } else if (moveX >= this.right) {
          this.right = moveX
        } else {
          if ((moveX - this.left) < (this.right - moveX)) {
            this.left = moveX
          } else {
            this.right = moveX
          }
        }
      } else { // 单滑块模式
        this.right = moveX
      }
    },
    onLeftMouseDown () { // 在滚动条上拖动左滑块
      var leftX = this.$refs.slider.getBoundingClientRect().left // 滑动条左端距离屏幕可视区域左边界的距离
      document.onmousemove = (e) => {
        // e.clientX返回事件被触发时鼠标指针相对于浏览器可视窗口的水平坐标
        var moveX = e.clientX - leftX
        if (moveX < 0) {
          this.left = 0
        } else if (moveX >= this.right) {
          this.left = this.right
        } else {
          this.left = moveX
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    },
    onRightMouseDown () { // 在滚动条上拖动右滑块
      var leftX = this.$refs.slider.getBoundingClientRect().left // 滑动条左端距离屏幕可视区域左边界的距离
      document.onmousemove = (e) => {
        // e.clientX返回事件被触发时鼠标指针相对于浏览器可视窗口的水平坐标
        var moveX = e.clientX - leftX
        if (moveX > this.width) {
          this.right = this.width
        } else if (moveX <= this.left) {
          this.right = this.left
        } else {
          this.right = moveX
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
</script>
<style lang="less" scoped>
@themeColor: #9ae5fa;
.m-slider {
  display: inline-block;
  height: 4px;
  padding: 6px 0;
  position: relative;
  z-index: 9;
  cursor: pointer;
  touch-action: none; // 禁用元素上的所有手势,使用自己的拖放和缩放api
  min-width: 120px;
  .u-slider-rail { // 灰色未选择滑动条背景色
    position: absolute;
    z-index: 99;
    height: 4px;
    width: 100%;
    background: #9ae5fa;
    border-radius: 2px;
    transition: background .3s;
  }
  .u-slider-track { // 蓝色已选择滑动条背景色
    position: absolute;
    z-index: 99;
    background: #9ae5fa;
    border-radius: 4px;
    height: 4px;
    cursor: pointer;
    transition: background .3s;
    pointer-events: none;
  }
  &:hover {
    .u-slider-rail { // 灰色未选择滑动条背景色
      background: #E3E3E3;
    }
    .u-slider-track { // 蓝色已选择滑动条背景色
      background: @themeColor;
    }
  }
  .u-slider-handle { // 滑块
    position: absolute;
    z-index: 999;
    width: 12px;
    height: 12px;
    top: 0px;
    background: #fff;
    border: 2px solid #91d5ff;
    border-radius: 50%;
    cursor: pointer;
    transition: border-color .3s,box-shadow .6s,transform .3s cubic-bezier(.18,.89,.32,1.28);
    &:focus {
      border-color: @themeColor;
      box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.2);
    }
    &:hover {
      border-color: @themeColor;
    }
  }
}
.disabled {
  cursor: not-allowed;
  .u-slider-rail {
    pointer-events: none;
  }
  .u-slider-track {
    background: rgba(13, 180, 241, 0.25);
  }
  .u-slider-handle {
    border-color: rgba(13, 180, 241, 0.25);
    pointer-events: none;
  }
  &:hover {
    .u-slider-track {
      background: rgba(13, 180, 241, 0.25);
    }
  }
}
</style>