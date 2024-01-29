<script setup>
import { reactive, onMounted, markRaw, defineAsyncComponent } from 'vue'

const demoData = reactive({
  checked: {
    fileName: 'Checked',
    title: ':checked',
    content: '勾選/取消勾選，來改變該元素的 :checked 狀態',
    component: ''
  },
  disabled: {
    fileName: 'Disabled',
    title: ':disabled',
    content: '元素被加上禁用狀態',
    component: ''
  },
  enabled: {
    fileName: 'Enabled',
    title: ':enabled',
    content: '元素有啟用，也就是 disabled 的相反',
    component: ''
  },
  empty: {
    fileName: 'Empty',
    title: ':empty',
    content: '沒有子元素的元素',
    component: ''
  }
})

onMounted(async () => {
  await getComponents()
})

async function getComponents () {
  Object.keys(demoData).forEach(key => {
    const { fileName } = demoData[key]
    demoData[key].component = markRaw(defineAsyncComponent(() => (import(`../../../components/css/pseudoClasses/${fileName}.vue`))))
  })
}
</script>

<template>
  <template v-for="item in demoData" :key="item?.fileName">
    <template v-if="item?.component">
      <component :is="item?.component" class="border p-5">
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
