<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <p class="test-selection">請圈選這段文字~~~</p>
  </section>
</template>

<style lang='scss' scope>
.test-selection::selection {
  color: red;
  background-color: #9dffe27c;
}
</style>
