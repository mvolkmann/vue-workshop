<template>
  <div>
    <div>Fruit: {{ name }}</div>
    <img :alt="name" :src="imageUrl" />
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  computed: {
    imageUrl() {
      return `/images/${this.name}.jpeg`;
    },
    name() {
      return this.$route.params.name;
    }
  },
  beforeRouteUpdate(to, from, next) {
    const name = to.path.split('/')[2];
    console.log('Fruit.vue beforeRouteUpdate: name =', name);
    if (name === 'kiwi') {
      alert('No kiwi please!');
    } else {
      next();
    }
  },
  watch: {
    // After route change ...
    $route(to, from) {
      console.log(
        'Fruit.vue watch $route: switched from',
        from.path,
        'to',
        to.path
      );
      const {name} = this.$route.params;
      console.log('Fruit.vue watch $route: name =', name);
    }
  }
};
</script>

<style scoped>
img {
  height: 200px;
}
</style>
