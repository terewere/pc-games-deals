<template>
  <h2 class="detail-title"></h2>
  <div class="price">
    <span class="normal-price"></span>
    <span class="sale-price"></span>
    <span class="savings"></span>
  </div>
  <div class="store-name"></div>
  <div class="thumb"></div>
</template>
<style lang="scss" scoped>
@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}

.thumb {
  width: 100%;
  height: 30%;
  animation: pulse-bg 1s infinite;
}

.normal-price,
.sale-price,
.savings,
.store-name {
  min-width: 100px;
  height: 16px;
  display: inline-block;
  animation: pulse-bg 1s infinite;
}

.detail-title {
  content: " ";
  width: 250px;
  height: 24px;
  animation: pulse-bg 1s infinite;
  margin: 10px 0;
}
</style>
