import axios from 'axios'
// 创建一个axios实例
var server = axios.create({
  baseURL: './',
  timeout: 5000
})
// 给axios实例创建请求发送拦截器
server.interceptors.request.use((config) => {
  // 在发送请求之前将data使用qs序列化
  // 如不需要可以删除
  // let data = qs.stringify(config.data)
  // config.data = data
  config.headers = {
    headerUserToken: '',
    headerUserId: ''
  }
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 给axios实例创建请求接受拦截器
server.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 如果http状态码正常，则直接返回数据
  // 此处请根据自己公司的业务代码进行处理
  return response

}, function (error) {
  // 对响应错误做点什么
//   if (error.response.status === 404) {
//     Message({
//       message: "网络异常",
//       type: 'error',
//       duration: 5 * 1000
//     })
//   }
  return Promise.reject(error);
});

export default server
