<template>
  <div class="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/fruit/apple">Apple</router-link>
      <router-link to="/fruit/orange">Orange</router-link>
      <button @click="showFruit('grapes')">Grapes</button>
      <button @click="showFruit('kiwi')">Kiwi</button>
      <button @click="showFruit('strawberry')">Strawberry</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    showFruit(name) {
      // This demonstrates routing from code
      // instead of from a <router-link>.
      this.$router.push('/fruit/' + name);
    }
  }
};
</script>

<style scoped>
.app {
  font-family: sans-serif;
  text-align: center;
}

button {
  border-radius: 4px;
  margin: 0 8px;
  padding: 4px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  margin: 0 10px;
}

/* Indicate active link by making it green. */
nav a.router-link-exact-active {
  color: green;
}
</style>
