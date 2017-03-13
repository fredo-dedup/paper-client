<template>
<div></div>
</template>

<script>
export default {
  name: 'ws-connection',
  
  data: function () { 
    return {socket: '' } 
  },

  mounted: function() {
    console.log("mounted wsconnection")

    var socket = new WebSocket('ws://localhost:' + serverPort);
    console.log('listening on : ' +  'ws://localhost:' + serverPort);

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

  destroyed: function() { this.socket.close() },

}
