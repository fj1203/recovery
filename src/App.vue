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
}
#app {
  .mint-header {
    background-color: #ffffff;
    color: #000;
  }
  .mint-cell-wrapper {
    background-image: none;
  }
}
</style>
