<template>
  <div id="app">
    <h1>Paper client</h1>
    <ws-connection/>
    <comp-tree :html="'root node'" :nid="1" :style=""/>
  </div>
</template>

<script>
export default {
  name: 'app',

  data: function() {
    return { }
  },
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
</style>
