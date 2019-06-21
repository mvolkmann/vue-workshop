<template>
  <div id="app">
    <!-- <Dogs /> -->
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/dogs">Dogs</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
//import Dogs from './components/Dogs.vue';

export default {
  name: 'App'
  // components: {
  //   Dogs
  // }
};
</script>

<style>
#app {
  font-family: sans-serif;
}

#app > div {
  padding: 20px;
}

body {
  margin: 0;
}

nav {
  border-bottom: solid gray 1px;
  padding: 20px;
}

nav a {
  font-size: 24px;
  margin-right: 20px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: green;
}
</style>
