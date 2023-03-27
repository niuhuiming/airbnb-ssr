<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const value = ref()
</script>

<template>
  {{ t('message.home') }}
  <el-time-picker v-model="value" placeholder="Arbitrary time" />
</template>

<style lang="scss"></style>
