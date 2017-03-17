import Vue from 'vue'

// window.serverPort = 5000;

import App from './App.vue'
import WsConnection from './WsConnection.vue'
import HtmlNode from './HtmlNode.vue'

console.log('server port : ' + window.serverPort)

window.bus = new Vue()

Vue.component('html-node', HtmlNode)
Vue.component('ws-connection', WsConnection)

window.usercomp = {}
window.usercomp['html-node'] = HtmlNode

// var kpath = '../../../.julia/v0.5/Rotolo/client/katex/katex.js' 
// kpath = "file:///D:/frtestar/.julia/v0.5/Rotolo/client/katex/katex.js"
// var kpath = "/dist/vegalite.js"
var kpath = "/dist/katex.js"

// import './require.js' 
// require('./require.js')

// requirejs([kpath], function(util) {
//   console.log(util);
//   Vue.component('katex', util)
// });

// Vue.component('katex', function (resolve, reject) {
//   var comp = import(kpath) ;
//   resolve(comp)

    // require(kpath).done(
    //   function(comp) {
    //     resolve( comp );
    // }).fail(function(x) { reject(x) });
// })


// import katexcomp from 'D:/frtestar/.julia/v0.5/Rotolo/client/katex.js'
// window.usercomp['katex'] = katexcomp

var rootv = new Vue({
    el: '#app',

    render: function(createElement) {
      return createElement(App)
    }
  })

