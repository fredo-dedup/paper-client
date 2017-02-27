<template>
  <div>resp = {{msg}} - {{counter}} </div>
</template>

<script>
export default {
  
  data: function () { 
    return {msg: '****',
            counter: 0,
            socket: '' } 
  },
  
  mounted: function() {
    console.log("mounted (2)")

    var socket = new WebSocket('ws://localhost:8081');
    var thiscomp = this

    socket.onopen = function() {
      // console.log("onopen");

      socket.onmessage = function(response) {
        var msg = JSON.parse(response.data);

        console.log("Something received: id = " + msg.nid);
        console.log("Something received: command = " + msg.command);
        console.log("Something received: payload = " + msg.payload);
        
        bus.$emit('event-'+msg.nid, msg);

        thiscomp.counter += 1
        thiscomp.msg = response.data
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

</script>