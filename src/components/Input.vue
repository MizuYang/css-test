<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class='form-floating mb-3'>
    <input type='text'
           class='form-control'
           id='floatingInput'
           placeholder='輸入語法'
           :value="props.modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           style="width:300px;">
    <label for='floatingInput'>輸入 <code>{{ props.title }}</code> 語法</label>
  </div>
</template>

<style lang='scss' scope></style>
