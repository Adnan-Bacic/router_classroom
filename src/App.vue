<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    
    <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
    <router-link :to="{ name:'Push1' }">Push1</router-link>
    <router-link :to="{ name:'Push2' }">Push2</router-link>
    <router-link :to="{ name:'Push3' }">Push3</router-link>
    <router-link :to="{ name:'Push4' }">Push4</router-link>
    <router-link :to="{ name:'Push5' }">Push5</router-link>
  </div>
</template>

<script>
import Push1 from '@/components/Push1'
import Push2 from '@/components/Push2'
import Push3 from '@/components/Push3'
import Push4 from '@/components/Push4'
import Push5 from '@/components/Push5'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
