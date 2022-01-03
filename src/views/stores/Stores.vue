<template>
  <div id="main" class="main">
    <div class="main-top">
      <div class="title">Stores</div>
    </div>
    <div class="categories">
      <h3>Stores Coming Soon!</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: #000;
  font-size: 28px;
  font-weight: 500;
}

@media only screen and (min-width: 600px) {
  .title {
    width: 100%;
  }

  .main-top {
    display: flex;
  }
}
</style>
