<script setup></script>

<template>
  <section class="mt-5 my-2">
    <div class="d-flex aling-items-center mb-2">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>

    <!-- 第五個子元素吃到效果 -->
    <div class="mb-3">
      <h3>第五個子元素吃到效果</h3>
      <ul class="test-nth-child-5 d-flex align-items-center">
        <li class="me-2">1</li>
        <li class="me-2">2</li>
        <li class="me-2">3</li>
        <li class="me-2">4</li>
        <li class="me-2">5</li>
        <li class="me-2">6</li>
        <li class="me-2">7</li>
      </ul>
    </div>

    <!-- 選擇三的倍數 -->
    <div class="mb-3">
      <h3>選擇三的倍數</h3>
      <ul class="test-nth-child-3n d-flex align-items-center">
        <li class="me-2">1</li>
        <li class="me-2">2</li>
        <li class="me-2">3</li>
        <li class="me-2">4</li>
        <li class="me-2">5</li>
        <li class="me-2">6</li>
        <li class="me-2">7</li>
      </ul>
    </div>

    <!-- 選擇奇數 -->
    <div class="mb-3">
      <h3>選擇奇數</h3>
      <ul class="test-nth-child-odd d-flex align-items-center">
        <li class="me-2">1</li>
        <li class="me-2">2</li>
        <li class="me-2">3</li>
        <li class="me-2">4</li>
        <li class="me-2">5</li>
        <li class="me-2">6</li>
        <li class="me-2">7</li>
      </ul>
    </div>

    <!-- 選擇偶數 -->
    <div class="mb-3">
      <h3>選擇偶數</h3>
      <ul class="test-nth-child-even d-flex align-items-center">
        <li class="me-2">1</li>
        <li class="me-2">2</li>
        <li class="me-2">3</li>
        <li class="me-2">4</li>
        <li class="me-2">5</li>
        <li class="me-2">6</li>
        <li class="me-2">7</li>
      </ul>
    </div>

    <!-- 前五個元素 -->
    <div class="mb-3">
      <h3>前五個元素</h3>
      <ul class="test-nth-child-6 d-flex align-items-center">
        <li class="me-2">1</li>
        <li class="me-2">2</li>
        <li class="me-2">3</li>
        <li class="me-2">4</li>
        <li class="me-2">5</li>
        <li class="me-2">6</li>
        <li class="me-2">7</li>
      </ul>
    </div>
  </section>
</template>

<style lang='scss' scope>
.test-nth-child-5 > li:nth-child(5) {
  color: #fff;
  background-color: #000;
  font-weight: 900;
  padding: 0 5px;
}
.test-nth-child-3n > li:nth-child(3n) {
  color: #fff;
  background-color: #000;
  font-weight: 900;
  padding: 0 5px;
}
.test-nth-child-odd > li:nth-child(odd) {
  color: #fff;
  background-color: #000;
  font-weight: 900;
  padding: 0 5px;
}
.test-nth-child-even > li:nth-child(even) {
  color: #fff;
  background-color: #000;
  font-weight: 900;
  padding: 0 5px;
}
.test-nth-child-6 > li:nth-child(-n+5) {
  color: #fff;
  background-color: #000;
  font-weight: 900;
  padding: 0 5px;
}
</style>
