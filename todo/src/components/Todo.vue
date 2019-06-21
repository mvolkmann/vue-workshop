<template>
  <li>
    <input type="checkbox" :checked="todo.done" @change="onToggleDone">
    <span :class="doneClass">{{todo.text}}</span>
    <button class="delete-btn" @click="onDeleteTodo">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    done: Boolean,
    onDeleteTodo: {
      type: Function,
      required: true
    },
    onToggleDone: {
      type: Function,
      required: true
    },
    todo: {
      type: Object,
      required: true,
      validator(obj) {
        return obj.text && obj.done !== undefined;
      }
    }
  },
  computed: {
    doneClass() {
      return 'done-' + this.todo.done;
    }
  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
}

.done-true {
  color: gray;
  text-decoration: line-through;
}

li {
  align-items: center;
  display: flex;
  margin-top: 10px;
}

li > span {
  margin-left: 10px;
}
</style>
