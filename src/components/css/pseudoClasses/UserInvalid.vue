<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <div class="d-flex align-items-center">
      <input type="text" class="test-user-invalid border border-lg" required>
      <!-- 叉叉或打勾 -->
      <span></span>
    </div>
  </section>
</template>

<style lang='scss' scope>
.test-user-invalid:user-invalid {
  background-color: pink;

  // 驗證失敗: 輸入欄位的兄弟元素, span 獲得偽元素 ::after 樣式
  & +span::after {
    content: "X";
    color: red;
    font-size: 25px;
    font-weight: bolder;
    margin-left: 10px;
  }
}
.test-user-invalid:user-valid {
  background-color: #ddffdd;

  // 驗證成功: 輸入欄位的兄弟元素, span 獲得偽元素 ::after 樣式
  & +span::after {
    content: "✓";
    color: green;
    font-size: 25px;
    font-weight: bolder;
    margin-left: 10px;
  }
}
</style>
