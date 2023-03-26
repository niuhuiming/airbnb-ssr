<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useRouter } from "vue-router"
const router = useRouter()
</script>

<template>
  <button @click="() => router.push({ path: '/home' })">首页</button>
  <button @click="() => router.push({ path: '/mine' })">我的</button>
  <router-view />
</template>

<style lang="scss">
#app {
  button {
    font-size: 40px
  }
}
</style>
