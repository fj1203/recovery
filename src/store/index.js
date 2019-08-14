import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: ''
  },
  getters: {
    address: state => state.address
  },
  mutations: {
    setAddress(state, val) {
      state.address = val
    }
  }
});
