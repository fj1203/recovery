<template>
  <div>
    <div v-if="selected=='tab3'">
      aa
    </div>
    <div v-else>
      bbb
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab3">
        <img slot="icon" src="../assets/logo.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../assets/logo.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      selected:'tab3'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
