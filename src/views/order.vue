
<template>
  <div class="order page">
    <mt-header title="下单">
      <mt-button slot="left" @click="back" icon="back"></mt-button>
    </mt-header>
    <mt-field label="选择区域："  placeholder readonly v-model="username"></mt-field>
    <mt-field label="详细地址" placeholder="请输入街道，路牌号等" v-model="username"></mt-field>
    <mt-field label="联系人" placeholder="请输入姓名" v-model="username"></mt-field>
    <mt-field label="电话号码" placeholder="请输入手机号" v-model="username"></mt-field>
    <div class="price">今日价格：黄纸0.6元，花纸0.4元，杂纸0.15元，统纸0.5元</div>
    <div class="tips">请确认您的废纸超过20斤，否则无法上门揽收</div>
    <mt-button size="large" @click="go" type="primary">下单</mt-button>
  </div>
</template>

<script>
export default {
  name: "Order",

  data() {
    return {
      username: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    go() {
      console.log(11)
      this.$router.push('/map')
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
