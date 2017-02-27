import Vue from 'vue'
import App from './App2.vue'
import WsConnection from './WsConnection.1.vue'
import CompTree from './CompTree.vue'

window.bus = new Vue()

Vue.component('comp-tree', CompTree)
Vue.component('ws-connection', WsConnection)

var rootv = new Vue({
    el: '#app',
    render: h => h(App)
  })



