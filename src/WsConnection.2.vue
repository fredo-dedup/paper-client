<script>
import Vue from 'vue'

//var socket = new WebSocket('wss://client.pushover.net/push:443');

export default function(wsulrl, parent) {

  console.log("created (4)")

  var socket = new WebSocket('ws://localhost:8081');

  socket.onopen = function() {
    console.log("onopen");
    socket.onmessage = function(response) {
      console.log("Something received: " + response.data);
      parent.received(response.data)
    };
  }

  socket.onerror= function(msg) {
    console.log("socket error: " + msg);
  }

  socket.onclose= function() {
    console.log("socket closing");
  }

}

</script>