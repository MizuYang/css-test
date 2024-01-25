<script setup>
import { ref, defineProps } from 'vue'
import Input from '@/components/Input.vue'
// props
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
// data
const text = ref('flex-grow: 2;')
</script>

<template>
  <section class="my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <div class="d-flex mb-2">
      <div class="box me-2"
           :style="text">{{ text }}</div>
      <div class="box flex-grow-1 mx-2">flex-grow: 1;</div>
      <div class="box flex-grow-1 mx-2">flex-grow: 1;</div>
    </div>

    <Input :title="props.item.title"
           v-model="text" />
  </section>

</template>

<style lang='scss' scope>
.flex-grow-1 {
  flex-grow: 1;
}
</style>
