import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios' // 把axios挂载到vue实例上
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

axios.defaults.baseURL = 'http://test-www.imooc.com/api'// 根据前端的跨域方式调整
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = ''
  }
})
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
