<template>
<div>
  {{{ "&lt;script&gt; {'name': " + name + "} &lt;/script&gt;" }}}
</div>
</template>

<script>
export default {
  name: 'script-node',

  props: ['html', 'nid', 'style'],

  data: function () {
    return {
      children: []
    }
  },

  created: function() {
    var thiscomp = this

    console.log('node ' + this.nid + ' created')
    bus.$on('event-' + this.nid, 
             function(msg) {
               console.log('node received : command ' + msg.command);
               console.log('node received ' + msg.payload.nid);
               console.log('node received ' + msg.payload.html);
               console.log('node received ' + msg.payload.style);
               switch(msg.command) {
                 case 'append':
                   console.log('added node ' + msg.payload.nid + 
                               ' to node ' + thiscomp.nid)
                   thiscomp.children.push({nid : msg.payload.nid,
                                           html : msg.payload.html,
                                           style : msg.payload.style});
                   break;
               }  
             });  
  }

}
</script>

