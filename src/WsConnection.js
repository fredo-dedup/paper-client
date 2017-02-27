export function setup() {
import VueWebsocket from 'vue-websocket'

Vue.component('ws-connection', {
  
  template: '<div>resp = {{ msg }}</div>',
  
  data: function () { 
    return {msg: ''} },
  
  methods: {
    get: function() {
      this.$socket.emit("get", { id: 12 }, 
        (response) => { 
          console.log("Something received: " + response);
          this.msg = response
          this.$emit('received', response) 
        })
    }
  },

  socket: {
    // Prefix for event names 
    // prefix: "/counter/", 
    
    // If you set `namespace`, it will create a new socket connection to the namespace instead of `/` 
    // namespace: "/counter", 

    events: {

      // Similar as this.$socket.on("changed", (msg) => { ... }); 
      // If you set `prefix` to `/counter/`, the event name will be `/counter/changed` 
      // 
      changed(msg) {
          console.log("Something changed: " + msg);
      },
      
      //common socket.io events
      connect() {
          console.log("Websocket connected to " + this.$socket.nsp);
      },

      disconnect() {
          console.log("Websocket disconnected from " + this.$socket.nsp);
      },

      error(err) {
          console.error("Websocket error!", err);
      }
    }
  }

})

}