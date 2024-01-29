<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <div class="d-flex align-items-center">
      <!-- BootStrap-checkbox -->
      <div class='form-check d-flex align-items-center'>
        <input class='form-check-input test'
               type='checkbox'
               value=''
               id='flexCheckDefault'
               enabled>
        <label class='form-check-label ms-3'
               for='flexCheckDefault'>
        </label>
      </div>
      <!-- BootStrap-radio -->
      <div class='form-check d-flex align-items-center'>
        <input class='form-check-input test'
               type='radio'
               name='flexRadioDefault'
               id='flexRadioDefault1'
               enabled>
        <label class='form-check-label ms-3'
               for='flexRadioDefault1'>
        </label>
      </div>

      <!-- 原生 -->
      <input type="checkbox" class="test" enabled>
      <input type="radio" class="test mx-3" enabled>
      <input type="text" class="test ms-13" enabled>
    </div>
   </section>
</template>

<style lang='scss' scope>
.test:enabled {
  background-color: rgba(255, 143, 143, 0.784) !important;
  transform: scale(1.5);
}
</style>
