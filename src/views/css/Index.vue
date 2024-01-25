<template>
  <main class="container">
    <RouterView />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// data
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  goToDefaultPage()
})

function goToDefaultPage () {
  if (route.name === 'css') router.push('/css/flex')
}
</script>

<style lang='scss' scope></style>
