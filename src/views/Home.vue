<template>
  <div class="home">
    <h2 class="l-h-40 font-blue font-weight-bold">Home Component</h2>
    <h3 class="p-10">Hellow, {{ userName }}</h3>
    <h3 class="p-10">Current time is: {{ currentTime }}</h3>
    <div class="p-10">
      <el-button type="primary" @click="tick">Tick Time</el-button>
      <el-button @click="stopTick">Stop Tick</el-button>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { ref, onMounted, onUnmounted } from 'vue'
const formatStyle = 'YYYY-MM-DD HH:mm:ss'

export default {
  name: 'Home',
  setup(props, context) {
    // console.log(props)

    // Attribute (非响应式对象，等同于 $attrs)
    // console.log(context.attrs)

    // 插槽 (非响应式对象，等同于 $slots)
    // console.log(context.slots)

    // 触发事件 (方法，等同于 $emit)
    // console.log(context.emit)

    // 暴露公共 property (函数)
    // console.log(context.expose)

    // setup 会在实例创建之前执行，返回的数据可以被 data methods computed 使用
    let timerID = ref(null)
    const userName = ref('redstar08')
    let currentTime = ref(dayjs().format(formatStyle))

    const tick = () => {
      console.log('setup: tick', timerID)
      clearInterval(timerID.value)
      timerID.value = setInterval(() => {
        currentTime.value = dayjs().format(formatStyle)
      }, 1000)
    }

    const stopTick = () => {
      console.log('setup: stopTick', timerID)
      clearInterval(timerID.value)
    }

    // 生命周期钩子
    onMounted(() => {
      tick()
    })

    onUnmounted(() => {
      stopTick()
    })

    // setup 返回的所有内容都暴露给组件的其余部分 (计算属性、方法、生命周期钩子等等) 以及组件的模板
    return {
      timerID,
      userName,
      currentTime,
      tick,
      stopTick,
    }
  },
  data() {
    return {
      msg: 'vue3真奇妙',
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>
