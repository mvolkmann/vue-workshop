<template>
  <div id="app">
    <!-- Dogs /-->
    <!-- For "Router" exercise ... -->
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/dogs">Dogs</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Dogs from './components/Dogs.vue';

export default {
  components: {
    Dogs
  }
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

/* For "Router" exercise ... */
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
