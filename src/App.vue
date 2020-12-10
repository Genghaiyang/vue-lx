<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html,body{
   width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(./assets/1-1.jpg) no-repeat center top;
  background-size: 100% auto;
}

</style>
