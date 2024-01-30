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
  },
  firstChild: {
    fileName: 'FirstChild',
    title: ':first-child',
    content: '第一個子元素',
    component: ''
  },
  lastChild: {
    fileName: 'LastChild',
    title: ':last-child',
    content: '最後一個子元素',
    component: ''
  },
  is: {
    fileName: 'Is',
    title: ':is()',
    content: '指定的標籤或 className 才吃的到樣式',
    component: ''
  },
  not: {
    fileName: 'Not',
    title: ':not()',
    content: '不是指定的標籤或 className 才吃的到樣式',
    component: ''
  },
  has: {
    fileName: 'Has',
    title: ':has()',
    content: '子元素中有指定標籤或 className 才吃的到樣式',
    component: ''
  },
  inRange: {
    fileName: 'InRange',
    title: ':inRange()',
    content: '輸入的值在 min, max 之間，才吃的到樣式',
    component: ''
  },
  invalidAndValid: {
    fileName: 'InvalidAndValid',
    title: ':invalidAndValid()',
    content: '依據是否有輸入值, 給予對應樣式(需加上 required 屬性)',
    component: ''
  },
  userInvalid: {
    fileName: 'UserInvalid',
    title: ':userInvalid()',
    content: '依據是否有輸入值, 給予對應樣式(用戶與輸入欄位互動後才驗證 [ 需加上 required 屬性 ])',
    component: ''
  },
  firstLine: {
    fileName: 'FirstLine',
    title: ':firstLine()',
    content: '首行會吃到樣式',
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
