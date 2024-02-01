<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <ul style="margin-left:200px;">
      <li class="test-marker">1</li>
      <li class="test-marker">2</li>
      <li class="test-marker">3</li>
    </ul>
  </section>
</template>

<style lang='scss' scope>
.test-marker::marker {
  content: '(我是:marker) - ';
  color: red;
}
</style>
