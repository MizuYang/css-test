<template>
  <main class="container">
    <!-- <DemoBox /> -->
    <template v-for="item in demoData" :key="item?.name">
      <template v-if="item.component.name">
        <component :is="item?.component"></component>
      </template>
    </template>
  </main>
</template>

<script setup>
import { reactive, defineAsyncComponent, markRaw, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// data
const route = useRoute()
const router = useRouter()
const demoData = reactive({
  flex: {
    fileName: 'Flex',
    component: ''
  },
  flex2: {
    fileName: 'Flex2',
    component: ''
  }
})

onMounted(async () => {
  goToDefaultPage()
  await getComponents()
})

function goToDefaultPage () {
  if (route.name === 'css') router.push('/css/flex')
}
async function getComponents () {
  Object.keys(demoData).forEach(key => {
    const name = demoData[key].fileName
    demoData[key].component = markRaw(defineAsyncComponent(() => import(`../../components/css/${name}.vue`)))
  })
}
</script>

<style lang='scss' scope></style>
