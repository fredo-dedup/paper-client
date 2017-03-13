import Vue from 'vue'

import App from './App.vue'
import WsConnection from './WsConnection.vue'
import HtmlNode from './HtmlNode.vue'

window.bus = new Vue()

// Vue.component('html-node', HtmlNode)
// Vue.component('ws-connection', WsConnection)

window.usercomp = {}
window.usercomp['html-node'] = HtmlNode


import katexcomp from 'D:/frtestar/.julia/v0.5/Rotolo/client/katex.js'
window.usercomp['katex'] = katexcomp

var rootv = new Vue({
    el: '#app',

    render: function(createElement) {
      return createElement(App)
    }
  })



