<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <div class="d-flex align-items-center">
      <input type="range"
             class="test-in-range border border-lg me-3"
             min="0"
             max="5"
             value="3"
             style="width:100px;">
      <input type="number"
             class="test-in-range border border-lg me-3"
             min="0"
             max="5"
             value="3"
             style="width:100px;">
    </div>
   </section>
</template>

<style lang='scss' scope>
.test-in-range:in-range {
  transform: rotate(10deg);
}
</style>
