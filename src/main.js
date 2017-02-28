import Vue from 'vue'
import App from './App.vue'
import WsConnection from './WsConnection.vue'
import CompTree from './CompTree.vue'

window.bus = new Vue()

Vue.component('comp-tree', CompTree)
Vue.component('ws-connection', WsConnection)

var rootv = new Vue({
    el: '#app',
    render: h => h(App)
  })



