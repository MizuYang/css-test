<script setup>
import { reactive, defineAsyncComponent, markRaw, onMounted } from 'vue'

const demoData = reactive({
  flex: {
    fileName: 'FlexBasis',
    title: 'flex-basis',
    content: '設定 Flex 元素在主軸方向上的初始大小',
    component: ''
  },
  flexGrow: {
    fileName: 'FlexGrow',
    title: 'flex-grow',
    content: '控制同一個 flex 容器中的子元素被分配到多少百分比的寬度',
    component: ''
  },
  alignSelf: {
    fileName: 'AlignSelf',
    title: 'align-self',
    content: '允許你針對個別的 flex item 設定在交叉軸上的對齊方式，而不影響其他 flex items',
    component: ''
  }
})

onMounted(async () => {
  await getComponents()
})

async function getComponents () {
  Object.keys(demoData).forEach(key => {
    const name = demoData[key].fileName
    demoData[key].component = markRaw(defineAsyncComponent(() => import(`../../../components/css/flex/${name}.vue`)))
  })
}
</script>

<template>
  <template v-for="item in demoData" :key="item?.fileName">
    <template v-if="item?.component">
      <component :is="item?.component" :item="item" class="border p-5">
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

<style lang='scss' scope>
.box {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #a9a4a4;
}
.box:first-of-type {
  background-color: #6297ed;
}
</style>
