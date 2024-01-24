<template>
  <p class="text-primary-color position-absolute-center">
    css
  </p>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  goToDefaultPage()
})

function goToDefaultPage () {
  if (route.name === 'css') router.push('/css/flex')
}
</script>

<style lang='scss' scope></style>
