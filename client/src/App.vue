<template>
  <div id="app">
    <img class="logo is-pulled-left" src="./WeFitLogoPink.png" alt="logo">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/login">Log In</router-link> |
      <router-link to="/workout">Workout</router-link> 
    </div>
    <router-view/>
    <footer><router-link to="/adminworkbench">Admin Workbench</router-link></footer>
  </div>
</template>

<style lang="scss">

.logo {
  margin: 10px 0px 0px 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
