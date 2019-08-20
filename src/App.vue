<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-12 10:35:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-19 15:47:12
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GetQueryString } from "./util/tools";
export default {
  name: "app",
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    this.$http
      .post("http://123.207.86.66:7011/user/getOpenId", {})
      .then(res => {})
      .catch(() => {})
      .finally(() => {});
    // let code = GetQueryString("code");
    // if (!code) {
    //   window.location.href =
    //     "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9d772653b94d2a10&redirect_uri=http://47.106.23.157/&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
    // } else {

    // }
  }
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
  box-sizing: border-box;
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
