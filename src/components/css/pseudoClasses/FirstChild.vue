<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <ul class="test d-flex align-items-center">
      <li v-for="num in 6" :key="num" class="me-5">
        <p class="p-1">{{ num }}</p>
      </li>
    </ul>
   </section>
</template>

<style lang='scss' scope>
ul.test > li:first-child {
  background-color: rgba(255, 143, 143, 0.784) !important;
}
</style>
