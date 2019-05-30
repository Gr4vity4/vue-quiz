<template>
    <div id="app">
        <div class="container">
            <Navbar/>
            <Home/>
        </div>
    </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Home from './components/Home.vue'

  export default {
    name: 'app',
    components: {
      Navbar,
      Home,
    },
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
