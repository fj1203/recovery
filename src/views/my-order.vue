
<template>
  <div class="page">
    <my-header title="我的订单"></my-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">新订单</mt-tab-item>
      <mt-tab-item id="2">服务中</mt-tab-item>
      <mt-tab-item id="3">待审核</mt-tab-item>
      <mt-tab-item id="4">已完成</mt-tab-item>
      <mt-tab-item id="5">已取消</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1"></mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="order-item">
          <div class="flex-item">
            <span>下单地址</span>
            <span>唐家镇</span>
          </div>
          <div class="flex-item">
            <span>下单时间</span>
            <span>2019-12-3-12:3</span>
          </div>
          <div class="flex-item">
            <span>接单员</span>
            <span>唐家镇</span>
          </div>
          <div class="flex-item">
            <span>接单手机</span>
            <span>2019-12-3-12:3</span>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3"></mt-tab-container-item>
      <mt-tab-container-item id="4"></mt-tab-container-item>
      <mt-tab-container-item id="5"></mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MyOrder",
  data() {
    return {
      selected: "1"
    };
  },
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .order-item{
    padding: 0 10px;
    background-color: #ffffff;
    margin-bottom: 10px;
    .flex-item{
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
    }
  }
</style>
