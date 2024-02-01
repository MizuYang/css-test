<script setup>
import { reactive, onMounted, markRaw, defineAsyncComponent } from 'vue'

const demoData = reactive({
  marker: {
    fileName: 'Marker',
    title: ':marker',
    content: '<li> 左邊圓點的樣式',
    component: ''
  }
})

onMounted(async () => {
  await getComponents()
})

async function getComponents () {
  Object.keys(demoData).forEach(key => {
    const { fileName } = demoData[key]
    demoData[key].component = markRaw(defineAsyncComponent(() => (import(`../../../components/css/pseudoElements/${fileName}.vue`))))
  })
}
</script>

<template>
  <template v-for="(item,key,idx) in demoData" :key="item?.fileName">
    <template v-if="item?.component">
      <component :is="item?.component"
                 class="border p-5"
                 :class="idx===Object.keys(demoData).length-1&&'mb-15'">
        <template #title>
          <p><code>{{ item.title }}：</code></p>
        </template>
        <template #content>
          <p>{{ item.content }}</p>
        </template>
      </component>
    </template>
  </template>
</template>

<style lang='scss' scope></style>
