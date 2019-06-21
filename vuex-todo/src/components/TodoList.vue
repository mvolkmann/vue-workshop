<template>
  <div>
    <h2>To Do List</h2>
    <div>
      {{uncompletedCount}} of {{todos.length}} remaining
      <button
        @click="archiveCompleted"
      >Archive Completed</button>
    </div>
    <br>
    <form @submit.prevent>
      <input
        type="text"
        size="30"
        autofocus
        placeholder="enter new todo here"
        :value="todoText"
        @input="updateTodoText($event.target.value)"
      >
      <button :disabled="!todoText" @click="addTodo">Add</button>
    </form>
    <ul class="unstyled">
      <li :key="todo.id" v-for="todo in todos">
        <Todo
          :todo="todo"
          :onDeleteTodo="() => deleteTodo(todo.id)"
          :onToggleDone="() => toggleDone(todo)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';
import Todo from './Todo.vue';

const SERVER_URL = 'http://localhost:1919/todo/';

export default {
  name: 'TodoList',
  components: {Todo},
  computed: {
    ...mapGetters(['uncompletedCount']),
    ...mapState({
      todos: state => state.todos,
      todoText: state => state.todoText
    })
  },
  async created() {
    const res = await fetch(SERVER_URL);
    const todos = await res.json();
    console.log('TodoList created: todos =', todos);
    this.$store.commit('setTodos', todos);
  },
  methods: {
    ...mapActions([
      'addTodo',
      'deleteTodo'
    ]),
    ...mapMutations([
      //'addTodo',
      'archiveCompleted',
      //'deleteTodo',
      'toggleDone',
      'updateTodoText'
    ])
  }
};
</script>

<style scoped>
button:disabled {
  background-color: gray;
  color: white;
}

ul.unstyled {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
</style>
