<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <div class="d-flex align-items-center">
      <div class="text-has">
        <p>p標籤</p>
      </div>

      <a href="javascript:;">a標籤</a>

      <div class="text-has"><span>span標籤</span></div>

      <small>small標籤</small>

      <div class="text-has">
        <h1>h1標籤</h1>
      </div>

      <h2>h2標籤</h2>

      <div class="text-has">
        <h3 class="h3">h3-className</h3>
      </div>
    </div>
   </section>
</template>

<style lang='scss' scope>
.text-has:has(p, span, h1, .h3) {
  background-color: pink;
}
</style>
