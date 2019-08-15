import inputNumber from './input-number';
import myHeader from './my-header';

const components = {
    install: function (Vue) {
      Vue.component('inputNumber', inputNumber);
      Vue.component('myHeader', myHeader);
    }
};
export default components;