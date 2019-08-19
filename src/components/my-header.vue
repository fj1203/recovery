<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-15 14:24:33
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-19 15:40:42
 -->
<template>
  <mt-header :title="title">
    <mt-button slot="left" @click="back" icon="back"></mt-button>
    <mt-button v-if="rightShow" slot="right" @click="sure" type="primary">确定</mt-button>
  </mt-header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    rightShow:  {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    sure() {
      this.$emit("sure");
    }
  }
};
</script>