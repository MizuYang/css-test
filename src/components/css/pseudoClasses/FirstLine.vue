<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <p class="test-first-line">
      這行字會吃到樣式 <br>
      這行不吃不到樣式
    </p>
  </section>
</template>

<style lang='scss' scope>
.test-first-line:first-line {
  color: red;
  font-weight: bolder;
}
</style>
