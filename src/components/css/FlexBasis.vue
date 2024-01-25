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
const text = ref('flex-basis: 200px;')
</script>

<template>
  <section class="mt-5 mb-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <div class="a1 mb-2">
      <div class="box me-2"
           :style="text">1</div>
      <div class="box mx-2">2</div>
      <div class="box mx-2">3</div>
    </div>

    <Input :title="props.item.title"
           v-model="text" />
  </section>

</template>

<style lang='scss' scope>
.a1 {
  display: flex;
  flex-basis: 200px;
}
</style>
