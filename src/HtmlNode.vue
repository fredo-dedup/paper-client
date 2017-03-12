<template>
<div>
  <div v-html="params.html"/>
  <component v-for="child in children" :is="child.comp" 
       :params="child.params" :nid="child.nid" :style="child.style"/>
  </div>
</div>

</template>

<script>
export default {
  name: 'html-node',

  props: ['params', 'nid'],

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
               switch(msg.command) {
                 case 'append':
                   console.log('added node ' + msg.payload.nid + 
                               ' to node ' + thiscomp.nid)
                   thiscomp.children.push({nid : msg.payload.nid,
                                           comp : usercomp[msg.payload.compname],
                                           params : msg.payload.params,
                                           style : msg.payload.style});
                   break;
                 case 'clear':
                   console.log('clearing node ' + thiscomp.nid)
                   thiscomp.children = []
                   break;
                 case 'splice':
                   console.log('splicing node ' + thiscomp.nid)
                   thiscomp.children = []
                   break;

               }  
             });  
  }

}
</script>

