
<template>
  <div class="order page">
    <iframe
      class="map-item"
      width="100%"
      height="100%"
      frameborder="0"
      src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=W6TBZ-R3EK3-LUM33-3DB7U-AY3CF-LBBDJ&referer=myapp"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Map",

  data() {
    return {
      username: ""
    };
  },
  destroyed() {
    window.removeEventListener("message", function() {}.bind(this), true);
  },
  mounted() {
    let that = this;
    window.addEventListener(
      "message",
      function(event) {
        var loc = event.data;
        if (loc && loc.module == "locationPicker") {
          console.log("location", loc);
          that.$router.go(-1);
        }
      }.bind(this),
      true
    );
  },
  methods: {}
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
