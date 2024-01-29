<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
    <div class="test" style="width:20px;height:20px;"></div>
   </section>
</template>

<style lang='scss' scope>
.test:empty {
  background-color: rgba(255, 143, 143, 0.784) !important;
  transform: scale(1.5);
}
</style>
