<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <p class="test-first-letter">
      你好 我是 Mizu
    </p>
  </section>
</template>

<style lang='scss' scope>
.test-first-letter:first-letter {
  color: red;
  font-weight: bolder;
  font-size: 25px;
}
</style>
