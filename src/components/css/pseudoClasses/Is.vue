<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <div class="d-flex align-items-center test-is">
      <p>p標籤</p>
      <a href="javascript:;">a標籤</a>
      <span>span標籤</span>
      <small>small標籤</small>
      <h1>h1標籤</h1>
      <h2>h2標籤</h2>
      <h3 class="h3">h3-className</h3>
    </div>
   </section>
</template>

<style lang='scss' scope>
.test-is > :is(p, span, h1, .h3) {
  background-color: pink;
}
</style>
