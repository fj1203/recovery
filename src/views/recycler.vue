<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-14 09:42:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-19 15:39:24
 -->

<template>
  <div class="order page">
    <my-header title="成为回收员"></my-header>
    <mt-cell ref="numA" class="mint-field" title="选择区域：">
      <span
        class="gray"
        :class="{ black: loc}"
        @click="setAddress"
      >{{loc ? loc.poiaddress :'请选择地址'}}</span>
    </mt-cell>
    <mt-field label="详细地址" placeholder="请输入街道，路牌号等" v-model="username"></mt-field>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
    <mt-field label="身份证号码" placeholder="身份证号码" v-model="username"></mt-field>
    <mt-cell class="mint-field" title="电话号码：">
      <input-number v-model="phone" type="phone" placeholder="请输入手机号" />
    </mt-cell>
    <mt-cell class="mint-field" title="验证码：">
      <input-number
        ref="numA"
        v-number="[this, 'numA', /^\d{6}$/]"
        v-model="sms"
        placeholder="请输入验证码"
      />
      <mt-button size="small" type="primary">点击获取</mt-button>
    </mt-cell>
    <mt-button style="margin-top:50px" size="large" @click="apply" type="primary">提交申请</mt-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "recycler",
  data() {
    return {
      username: "",
      phone: "",
      sms: ""
    };
  },
  computed: {
    ...mapGetters({
      loc: "address"
    })
  },
  methods: {
    setAddress() {
      this.$router.push("/map");
    },
    apply() {
      this.$http.post("/user/register", {

      }).then(res => {
        
      }).catch(() => {

      }).finally(() => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mint-field {
  margin-bottom: 10px;
}
.price {
  margin: 15px 0;
}
.tips {
  color: red;
  margin: 15px 0;
}
.gray {
  color: #888;
}
.black {
  color: #000;
}
</style>
