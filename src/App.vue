<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <footer1></footer1>
  </div>
</template>


<script>
import navigation from './components/navigation'
import footer1 from './components/footer1'
export default {
  name: 'app',
  data(){
    return{
        demo:true
  }},
  components:{
   navigation,
   footer1
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
