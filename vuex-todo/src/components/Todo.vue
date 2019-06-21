<template>
  <li>
    <input type="checkbox" :checked="todo.done" @change="onToggleDone">
    <span :class="doneClass">{{todo.text}}</span>
    <button @click="onDeleteTodo">Delete</button>
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
  },
  mounted() {
    // Just for debugging.
    console.log(this.$options._componentTag + ':', this);
  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
}

li {
  margin-top: 5px;

  .done-true {
    color: gray;
    text-decoration: line-through;
  }
}
</style>
