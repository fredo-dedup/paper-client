<template>
<div>
  <div v-html="params.html"/>
  <component v-for="child in children" :is="child.comp" 
       :params="child.params" :nid="child.nid" :style="child.style"/>
  </div>
</div>

</template>

<script>
import Vue from 'vue'

export default {
  name: 'html-node',

  props: ['params', 'nid'],

  data: function () {
    return {
      children: []
    }
  },

  mounted: function() {
    var thiscomp = this

    this.$el.scrollIntoView();

    console.log('node ' + this.nid + ' created')

    bus.$on('event-' + this.nid, 
             function(msg) {
               console.log('node ' + thiscomp.nid + 
                           ' received command ' + msg.command);
               
               var args = msg.args
               
               switch(msg.command) {
                 case 'append':
                   console.log('added node ' + args.newnid + 
                               ' to node ' + thiscomp.nid)

                   thiscomp.children.push({nid:    args.newnid,
                                           comp:   usercomp[args.compname],
                                           params: args.params,
                                           style:  args.style });
                   break;

                 case 'clear':
                   console.log('clearing node ' + thiscomp.nid)
                   thiscomp.children = []
                   break;
                   
                 case 'splice':
                   console.log('splicing node ' + thiscomp.nid)
                   break;

               }  
             });  
  }

}
</script>
