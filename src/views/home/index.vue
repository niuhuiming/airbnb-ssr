<script setup lang="ts">
import { h, getCurrentInstance } from 'vue'
// 获取当前组件上下文
const { proxy }: any = getCurrentInstance()

proxy.$message({
  message: h('p', null, [
    h('span', null, 'Message can be '),
    h('i', { style: 'color: teal' }, 'VNode'),
  ]),
})
</script>

<template>
  首页
  <el-button>element按钮</el-button>
</template>

<style scoped></style>