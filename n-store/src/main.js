import vue from 'vue'
import App from './App.vue'

vue.config.productionTip = false

import './assets/js/font.js'
import './assets/css/main.css'

import router from './plugins/router'
import axios from './plugins/axios'

vue.prototype.baseUrl = require('../config/config').active

new vue({
  render: h => h(App),
  router
}).$mount('#app')
