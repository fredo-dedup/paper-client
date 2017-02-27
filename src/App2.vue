<template>
  <div id="app">
    
    <h1>to be added</h1>
    <ws-connection @gotmsg="processmsg"></ws-connection>
        
    <div v-for="item in lst" v-html="item">
    </div>
    <h2>Non - Essential Links</h2>
    <comp-tree :html="'root node'" :nid="1" :style=""/>
    <h2>Essential Links</h2>
    <a href="https://vuejs.org" target="_blank">Kore Docs</a>
   
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lst: ["abcd", "132546"],
      htstr: "<div>html stroing</div>"
    }
  },

  methods: {
    processmsg: function(resp) {
      this.lst.push(resp)
      // console.log('receiver got :' + resp)
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #203e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
