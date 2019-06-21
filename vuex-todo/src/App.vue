<template>
  <TodoList/>
</template>

<script>
import TodoList from './components/TodoList';
import store from './store';

export default {
  name: 'App',
  components: {TodoList},
  store
};
</script>

<style>
body {
  font-family: sans-serif;
  padding-left: 10px;
}
</style>
