<template>
  <Header />
  <Tabs />
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 元件
import Header from '@/components/nav/Header.vue'
import Tabs from '@/components/nav/Tabs.vue'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (route.meta.title === '首頁') router.push('/css')
})

</script>

<style lang="scss">
@import "src/assets/styleSheets/all.scss";
</style>
