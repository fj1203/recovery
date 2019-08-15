import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: '',
    userInfo:''
  },
  getters: {
    address: state => state.address,
    userInfo: state => state.userInfo
  },
  mutations: {
    setAddress(state, val) {
      state.address = val
    },
    setUserInfo(state, val) {
      state.userInfo = val
    }
  }
});
