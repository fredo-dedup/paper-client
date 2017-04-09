<template>
  <div id="app">
    <ws-connection style="font-style: italic;text-align: right;font-size: x-small;"/>
    <html-node :params="{}" :deco="{}" :nid="1" />
  </div>
</template>

<script>
import Vue from 'vue'
import text from 'text'

export default {
  name: 'app',

  data: function() {
    return { headcomp: usercomp['testcomp'] }
  },

  // suscribe to 'event-0' events
  created: function() {
    var thiscomp = this

    bus.$on('event-0', 
            function(msg) {

              console.log('event-0 : command ' + msg.command);

              switch(msg.command) {
                case 'load':
                  var args = msg.args
                  
                  console.log('loading asset ' + args.assetname +
                              ' in ' + args.assetpath)

                  requirejs([args.assetpath], function(util) {
                    console.log('new comp = ' + util);
                    // usercomp[args.assetname] = util;
                    Vue.component(args.assetname, util)
                  });
            
                  break;

              }  
            })
  }        
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #203e50;
}

h1, h2 {
  font-weight: normal;
}
</style>
