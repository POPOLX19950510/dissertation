<template>
  <div id="app">
    <app-title></app-title>
    <router-view/>
  </div>
</template>

<script>
  import AppTitle from "./components/common/AppTitle";

  export default {
    name: 'App',
    data () {
      return {
        title: '银泰商城'
      }
    },
    components: {
      AppTitle
    }
  }
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
