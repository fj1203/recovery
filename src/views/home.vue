<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-12 17:34:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-13 09:52:41
 -->

<template>
  <div class="home">
    <div class="page-content" v-if="selected=='tab3'">
       <marquee>滚动文字</marquee>
      <div class="items-box">
        <div class="item">我的订单</div>
        <div class="item">我的积分</div>
        <div class="item">关于我们</div>
        <div @click="recycler" class="item">成为回收员</div>
      </div>
      <mt-button size="large" @click="order" type="primary">一键下单</mt-button>
    </div>
    <div class="page" v-else>
      <div class="info">
        <img src="../assets/logo.png" alt="">
        slowly
      </div>
       <div class="info">
         联系我们
        </div>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab3">
        <img slot="icon" src="../assets/home.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../assets/person.png" />
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
  },
  methods:{
    order(){
      this.$router.push('/order')
    },
    recycler(){
      this.$router.push('/recycler')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.page-content {
  width:calc(100% - 40px);
  padding:0 20px;
  
}
.items-box{
  .item{
    width:49%;
    height: 100px;
    float: left;
    text-align: center;
    line-height: 100px;
    &:first-child{
      border-right: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
    }
    &:nth-child(2){
      border-bottom: 1px solid #cccccc;
    }
    &:nth-child(3){
      border-right: 1px solid #cccccc;
    }
    
  }
}
.info{
  padding: 10px;
  margin-bottom: 20px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
}

.home{
  height: 100%;
}
</style>
