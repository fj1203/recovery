
<template>
  <div class="order page">
    <mt-header title="选择地址">
      <mt-button slot="left" @click="back" icon="back"></mt-button>
      <mt-button slot="right" @click="sure" type="primary">确定</mt-button>
    </mt-header>

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
import { mapMutations } from "vuex";
export default {
  name: "Map",
  data() {
    return {
      loc: {
        latlng: {
          lat: "",
          lng: ""
        }
      }
    };
  },
  beforeDestroy() {
    window.removeEventListener(
      "message",
      function() {
        console.log(111);
      }.bind(this),
      true
    );
  },
  mounted() {
    let that = this;
    window.addEventListener(
      "message",
      function(event) {
        var loc = event.data;
        if (loc && loc.module == "locationPicker") {
          if (
            that.loc.latlng.lat != loc.latlng.lat ||
            that.loc.latlng.latlng != loc.latlng.latlng
          ) {
            that.loc = loc;
          }
        }
      }.bind(this),
      true
    );
  },
  methods: {
    ...mapMutations(["setAddress"]),
    back() {
      this.$router.go(-1);
    },
    sure() {
      if (this.loc.latlng.lat) {
        this.setAddress(this.loc);
        this.$router.go(-1)
      }
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
