import Vue from 'vue'

import App from './App.vue'
import WsConnection from './WsConnection.vue'
import HtmlNode from './HtmlNode.vue'

console.log('server port : ' + window.serverPort)

window.bus = new Vue()

Vue.component('html-node', HtmlNode)
Vue.component('ws-connection', WsConnection)

window.usercomp = {}
window.usercomp['html-node'] = HtmlNode

var rootv = new Vue({
    el: '#app',

    render: function(createElement) {
      return createElement(App)
    }
  })

