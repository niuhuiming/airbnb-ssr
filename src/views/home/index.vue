<script setup lang="ts">
import { h, getCurrentInstance } from 'vue'
import { fetchRoomList } from '../../api/index'
// 获取当前组件上下文
const { proxy }: any = getCurrentInstance()

proxy.$message({
  message: h('p', null, [
    h('span', null, 'Message can be '),
    h('i', { style: 'color: teal' }, 'VNode'),
  ]),
})

const getRoomList = () => {
  const res = fetchRoomList()
  console.log(res)  
}
</script>

<template>
  首页
  <div class="text">红红火火恍恍惚惚</div>
  <button @click="getRoomList">发送请求</button>
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";
</style>