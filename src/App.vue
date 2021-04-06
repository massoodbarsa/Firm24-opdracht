<template>
  <div id="app">
    <div id="nav">
      <!-- <Header /> -->
    </div>
    <router-view />
  </div>
</template>

<script>
// import Header from "./components/Header";
export default {
  components: {
    // Header,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #494242;

    &.router-link-exact-active {
      color: #d85214;
    }
  }
}
</style>
