<template>
<div :style="mystyle" :class="myclass" :id="myid" >
  {{ params.html }}
  <component v-for="child in children"  
             :is="child.comp" 
             :nid="child.nid"
             :params="child.params" 
             :deco="child.deco"
             />
</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'html-node',

  props: ['nid', 'deco', 'params'],

  data: function () {
    return {
      children: [],          //sub containers
      mystyle:  this.deco.style,  //local var to allow changes
      myclass:  this.deco.class,
      myid:     this.deco.id
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
                                           comp:   Vue.component(args.compname), 
                                           params: args.params,
                                           deco:   args.deco });
                   break;

                 case 'clear':
                   console.log('clearing node ' + thiscomp.nid)
                   thiscomp.children = [];
                   thiscomp.mystyle = msg.args.deco.style;
                   thiscomp.myclass = msg.args.deco.class;
                   thiscomp.myid    = msg.args.deco.id;
                   break;

               }  
             });  
  }

}
</script>
