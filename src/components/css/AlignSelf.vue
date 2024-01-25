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
const text = ref('align-self: flex-start;')
</script>

<template>
  <section class="my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <div class="w-25 d-flex align-items-center flex-column mb-2">
      <div class="box"
           :style="text">1</div>
      <div class="box my-2">2</div>
      <div class="box my-2">3</div>
    </div>

    <Input :title="props.item.title"
           v-model="text" />
  </section>
</template>

<style lang='scss' scope></style>
