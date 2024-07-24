<template>
  <div id="app">
    <MenuVistas />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuVistas from './components/MenuVistas.vue'

export default {
  name: 'App',
  components: {
    MenuVistas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
