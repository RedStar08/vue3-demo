<template>
  <div class="felx flex-center flex-v-center p-20">
    <span class="text-20 color-gray">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    msg: {
      type: String,
      default: '暂无数据',
    },
  },
  setup(props, context) {
    console.log(props)

    // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs)

    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)

    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)

    // 暴露公共 property (函数)
    console.log(context.expose)
  },
}
</script>

<style lang="scss" scoped></style>
