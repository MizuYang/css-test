<template>
  <main class="container-fluid">
    <RouterView />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// store
import { useCssStore } from '@/stores/useCssStore.js'
// composables
import { useTabs } from '@/composables/useTabs.js'

const { tabs } = useTabs()
const { updateCurTabs } = useCssStore()

// data
const route = useRoute()
const router = useRouter()

onMounted(() => {
  goToDefaultPage()
  updateCurTabs(tabs.value[route?.meta?.name].tabId)
})

function goToDefaultPage () {
  if (route.name === 'css') router.push('/css/flex')
}
</script>

<style lang='scss' scope></style>
