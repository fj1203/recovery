
<template>
  <div class="order page">
    <mt-header title="成为回收员">
      <mt-button slot="left" @click="back" icon="back"></mt-button>
    </mt-header>
    <mt-field label="选择区域："  placeholder readonly v-model="username"></mt-field>
    <mt-field label="详细地址" placeholder="请输入街道，路牌号等" v-model="username"></mt-field>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
    <mt-field label="身份证号码" placeholder="身份证号码" v-model="username"></mt-field>
    <mt-cell class="mint-field" title="电话号码：">
			<input-number v-model="phone" type="phone" placeholder="请输入手机号" />
		</mt-cell>
    <mt-cell class="mint-field" title="验证码：">
			<input-number ref="numA" v-number="[this, 'numA', /^\d{6}$/]"  v-model="sms" placeholder="请输入验证码" />
     <mt-button size="small" type="primary">点击获取</mt-button>
		</mt-cell>
    <mt-button style="margin-top:50px" size="large" type="primary">提交申请</mt-button>
  </div>
</template>

<script>
export default {
  name: "recycler",
  data() {
    return {
      username: "",
      phone:'',
      sms:''
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
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
</style>
