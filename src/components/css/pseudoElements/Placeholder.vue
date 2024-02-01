<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <input type="text"
           class="form-control test-placeholder"
           placeholder="我是 placeholder">
  </section>
</template>

<style lang='scss' scope>
.test-placeholder::placeholder {
  color: red;
  background-color: #9dffe27c;
  font-size: 20px;
  font-weight: 900;
  font-style: italic;
}
</style>
