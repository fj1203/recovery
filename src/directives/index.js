// import Vue from 'vue';
// Vue.directive('number', {
//   inserted: (el, binding, vnode) => {
//     console.log(11)
//       let input = el.tagName.toUpperCase() === 'INPUT' ? el : null;
//       if (!input) {
//           for (let i of el.children) {
//               if (i.tagName.toUpperCase() === 'INPUT') input = i;
//           }
//       }
//       if (input) {
//           let regExp = binding.value[2] || new RegExp('^(0|[1-9]\\d*)$');
//           let value = '';
//           const handleInput = e => {
//               if (e.target.value && !(regExp.test(e.target.value))) {
//                   e.target.value = value;
//               } else {
//                   value = e.target.value;
//               }
//               vnode.componentInstance.$emit('input', value);
//               vnode.componentInstance.$nextTick(()=>{
//                   e.target.value = value;
//               });
//           };
//           const handleFocus = e=>{
//               value = e.target.value;
//           };
//           on(input, 'input', handleInput);
//           on(input, 'focus', handleFocus);
//       }
//   }
// });
// const on = (function () {
//   if (document.addEventListener) {
//       return function (element, event, handler) {
//           if (element && event && handler) {
//               element.addEventListener(event, handler, false);
//           }
//       };
//   } else {
//       return function (element, event, handler) {
//           if (element && event && handler) {
//               element.attachEvent('on' + event, handler);
//           }
//       };
//   }
// })();