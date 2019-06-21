import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let lastId = 0;
const createTodo = (text, done = false) => ({id: ++lastId, text, done});

const SERVER_URL = 'http://localhost:1919/todo/';

export default new Vuex.Store({
  strict: true,
  state: {
    todoText: '',
    //todos: [createTodo('learn Vue', true), createTodo('build a Vue app')]
    todos: []
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
      state.todoText = '';
      console.log('store addTodo: lastId =', lastId);
    },
    archiveCompleted(state) {
      state.todos = state.todos.filter(t => !t.done);
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter(t => t.id !== todoId);
    },
    setTodos(state, todos) {
      state.todos = todos;
      lastId = todos.reduce((acc, todo) => Math.max(acc, todo.id), 0);
      console.log('store setTodos: lastId =', lastId);
    },
    toggleDone(state, todo) {
      const todoToToggle = state.todos.find(t => t.id === todo.id);
      todoToToggle.done = !todoToToggle.done;
    },
    updateTodoText(state, todoText) {
      state.todoText = todoText;
    }
  },
  getters: {
    uncompletedCount: state => state.todos.filter(t => !t.done).length
  },
  actions: {
    async addTodo(context) {
      const todo = createTodo(context.state.todoText);
      const res = await fetch(SERVER_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
      });
      if (res.ok) {
        context.commit('addTodo', todo);
      } else {
        alert('Error adding todo');
      }
    },
    async deleteTodo(context, todoId) {
      console.log('store deleteTodo action: todoId =', todoId);
      const res = await fetch(SERVER_URL + todoId, {method: 'DELETE'});
      console.log('store deleteTodo action: res =', res);
      if (res.ok) {
        context.commit('deleteTodo', todoId);
      } else {
        alert('Error deleting todo');
      }
    }
  }
});
