<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const router = useRouter()
const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
const { locale: localeLanguage } = useI18n()
const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
  localeLanguage.value = language.value
}
</script>

<template>
  <el-button @click="toggle">Switch Language</el-button>
  <el-config-provider :locale="locale">
    <button @click="() => router.push({ path: '/home' })">首页</button>
    <button @click="() => router.push({ path: '/mine' })">我的</button>
    <router-view />
  </el-config-provider>
</template>

<style lang="scss"></style>
