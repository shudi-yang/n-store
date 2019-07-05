import Vue from 'vue';
import axios from 'axios';
// Vue.use(axios);  axios不支持use安装
Vue.prototype.$axios = axios;
window.axios = axios;

export default axios;
