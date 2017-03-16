<template>
  <div id="app">
    <h3>client</h3>
    <ws-connection/>
    <html-node :params="{html : 'root node'}" :nid="1" :style=""/>
  </div>
</template>

<script>
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
                  console.log('loading asset ' + msg.assetname + 
                              ' in ' + msg.assetpath)

                  // import newcomp from msg.assetpath
                  // usercomp[msg.assetname] = newcomp
                  // require(msg.assetpath, function(newcomp) {
                  //  usercomp[msg.assetname] = newcomp
                  // }) ;
            
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
