<template>
  <div id="app">
    <Temperature
      :min="-10"
      :max="110"
      :cold="30"
      :hot="90"
      :temperature="temperature"
      @change="temperatureChange"
    />
  </div>
</template>

<script>
import Temperature from './components/Temperature.vue';

export default {
  name: 'app',
  components: {
    Temperature
  },
  data() {
    return {
      temperature: 70
    };
  },
  methods: {
    temperatureChange(t) {
      this.temperature = t;
    }
  }
};
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
