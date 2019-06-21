<template>
  <div>
    <h2>To Do List</h2>
    <div>
      {{uncompletedCount}} of {{todos.length}} remaining
      <button
        class="archive-btn"
        @click="onArchiveCompleted"
      >Archive Completed</button>
    </div>
    <form @submit.prevent>
      <input
        class="todo-input"
        type="text"
        size="30"
        autofocus
        placeholder="enter new todo here"
        v-model="todoText"
        @change="onTextChange"
      >
      <button class="add-btn" :disabled="!todoText" @click="onAddTodo">Add</button>
    </form>
    <ul class="unstyled">
      <Todo v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :onDeleteTodo="() => onDeleteTodo(todo.id)"
        :onToggleDone="() => onToggleDone(todo)"
      />
    </ul>
  </div>
</template>

<script>
import Todo from './Todo.vue';

let lastId = 0;
const createTodo = (text, done = false) => ({id: ++lastId, text, done});

export default {
  name: 'TodoList',
  components: {Todo},
  computed: {
    uncompletedCount() {
      return this.todos.filter(t => !t.done).length;
    }
  },
  data() {
    return {
      todos: [createTodo('learn Vue', true), createTodo('build a Vue app')],
      todoText: ''
    };
  },
  methods: {
    onAddTodo() {
      this.todos = this.todos.concat(createTodo(this.todoText));
      this.todoText = '';
    },

    onArchiveCompleted() {
      this.todos = this.todos.filter(t => !t.done);
    },

    onDeleteTodo(todoId) {
      this.todos = this.todos.filter(t => t.id !== todoId);
    },

    onTextChange(event) {
      this.todoText = event.target.value;
    },

    onToggleDone(todo) {
      const {id} = todo;
      this.todos = this.todos.map(t =>
        t.id === id ? {...t, done: !t.done} : t
      );
    }
  }
};
</script>

<style scoped>
button:disabled {
  background-color: gray;
  color: white;
  margin-left: 10px;
}

input {
  margin-top: 10px;
}

ul.unstyled {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
</style>
