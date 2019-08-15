<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-12 10:35:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-15 09:50:01
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GetQueryString } from "./util/tools";
import axios from 'axios'
export default {
  name: "app",
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
  //  let code  = GetQueryString("code")
  //   if (!code) {
  //     window.location.href =
  //       "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxceda4727aec0ad36&redirect_uri=http://47.106.23.157&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
  //   } else {
  //     axios.get('https://api.weixin.qq.com/sns/oauth2/access_token',{
  //       params:{
  //           appid:'wxceda4727aec0ad36',
  //           secret:'00b6a1fcee004a31ebae6e68c213d249',
  //           code:code,
  //           grant_type:'authorization_code'
  //       }
  //     }).then(res => {
  //       console.log(res)
        
  //     });
  //   }
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
