import Vue from 'vue'

import App from './App.vue'
import WsConnection from './WsConnection.vue'
// import CompTree from './CompTree.vue'
// import SimpleNode from './SimpleNode.vue'
import HtmlNode from './HtmlNode.vue'

window.bus = new Vue()

// Vue.component('comp-tree', CompTree)
// Vue.component('simple-node', SimpleNode)
Vue.component('html-node', HtmlNode)
Vue.component('ws-connection', WsConnection)

import mycomponent from 'D:/frtestar/.julia/v0.5/Rotolo/client/mc.js'
// window.testcomp = mycomponent
window.usercomp = {}
window.usercomp['testcomp'] = mycomponent
window.usercomp['html-node'] = HtmlNode

var rootv = new Vue({
    el: '#app',

    render: function(createElement) {
      return createElement(App)
    }
  })



