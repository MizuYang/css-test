<script setup>
import { reactive, defineAsyncComponent, markRaw, onMounted } from 'vue'

const demoData = reactive({
  flex: {
    fileName: 'FlexBasis',
    title: 'flex-basis',
    component: ''
  },
  flex2: {
    fileName: 'Flex2',
    component: ''
  }
})

onMounted(async () => {
  await getComponents()
})

async function getComponents () {
  Object.keys(demoData).forEach(key => {
    const name = demoData[key].fileName
    demoData[key].component = markRaw(defineAsyncComponent(() => import(`../../../components/css/${name}.vue`)))
  })
}
</script>

<template>
  <template v-for="item in demoData" :key="item?.fileName">
    <template v-if="item?.component">
      <component :is="item?.component" :item="item">
        <template #title>
          <p class="mb-2">{{ item.title }}</p>
        </template>
      </component>
    </template>
  </template>
</template>

<style lang='scss' scope>
.box {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #a9a4a4;
}
</style>
