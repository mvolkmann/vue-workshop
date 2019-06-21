<template>
  <div id="app">
    <TodoList />
    <GreetingJsx name="Mark" />
  </div>
</template>

<script>
import GreetingJsx from './components/GreetingJsx.js';
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',
  components: {
    GreetingJsx,
    TodoList
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
  padding-left: 10px;
}

button, input {
  border: solid lightgray 1px;
  border-radius: 4px;
  padding: 4px;
}
</style>
