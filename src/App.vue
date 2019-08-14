<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
  };
</script>

<style lang="less">
body {
  margin: 0;
  height: 100%;
}
html {
  height: 100%;
}
#app {
  height: 100%;
}
.page {
  background-color: #f3f3f3;
  height: 100%;
  padding-top: 40px;
}
#app {
  .mint-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f5f5f5;
    font-weight: bold;
    color: #000;
  }
  .mint-cell-wrapper {
    background-image: none;
  }
}
</style>
