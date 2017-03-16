<template>
  <div>{{socketName}}</div>
</template>

<script>
export default {
  name: 'ws-connection',
  
  data: function () { 
    return {socketName: '' } 
  },

  created: function() {
    console.log("mounted ws connection")

    this.socketName = 'ws://localhost:' + serverPort

    var socket = new WebSocket(this.socketName);
    console.log('listening on : ' +  this.socketName);

    socket.onopen = function() {
      socket.onmessage = function(response) {
        var msg = JSON.parse(response.data);

        console.log("wssocket: id = " + msg.nid);
        console.log("wssocket: command = " + msg.command);
        
        bus.$emit('event-' + msg.nid, msg);
      };
    }

    socket.onerror= function(msg) {
      console.log("socket error: " + msg);
    }

    socket.onclose= function() {
      console.log("socket closing");
    }

    this.socket = socket
  },

  destroyed: function() { this.socket.close() }

}

</script>
