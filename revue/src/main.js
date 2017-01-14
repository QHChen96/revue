// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Velocity from 'velocity-animate'
import Lodash from 'lodash'
import App from './App'
import App1 from './App1'
import App2 from './App2'
Vue.use(Velocity)
Vue.use(Lodash)
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  template: '<App2/>',
  components: { App2 }
})
