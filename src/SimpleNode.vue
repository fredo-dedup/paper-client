<<<<<<< HEAD
<template>
<div>
  <div v-if="html != ''" v-html="html" v-bind:style="style"/>
  <div v-for="child in children">
    <simple-node :html="child.html" :nid="child.nid" :style="child.style"/>
  </div>
</div>
</template>

<script>
export default {
  name: 'simple-node',

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

=======
<template>
<div>
  <div v-if="html != ''" v-html="html" v-bind:style="style"/>
  <div v-for="child in children">
    <simple-node :html="child.html" :nid="child.nid" :style="child.style"/>
  </div>
</div>
</template>

<script>
export default {
  name: 'simple-node',

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

>>>>>>> 191a74bcd36d24b30b68f0c5347ed79c025b2e5d
