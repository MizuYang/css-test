<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <div class="d-flex align-items-center">
      <input type="text" class="test-validate border border-lg" required>
    </div>
  </section>
</template>

<style lang='scss' scope>
.test-validate:invalid {
  background-color: pink;
}
.test-validate:valid {
  background-color: #ddffdd;
}
</style>
