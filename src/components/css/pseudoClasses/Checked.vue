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
        <input class='form-check-input'
               type='checkbox'
               value=''
               id='flexCheckDefault'
               checked>
        <label class='form-check-label ms-3'
               for='flexCheckDefault'>
        </label>
      </div>
      <!-- BootStrap-radio -->
      <div class='form-check d-flex align-items-center'>
        <input class='form-check-input'
               type='radio'
               name='flexRadioDefault'
               id='flexRadioDefault1'
               checked>
        <label class='form-check-label ms-3'
               for='flexRadioDefault1'>
        </label>
      </div>

      <!-- 原生 -->
      <input type="checkbox" class="me-3" checked>
      <input type="radio" checked>
    </div>
   </section>
</template>

<style lang='scss' scope>
:checked {
  background-color: red !important;
  transform: scale(1.5);
}
</style>
