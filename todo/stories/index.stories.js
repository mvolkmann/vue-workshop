/* eslint-disable react/react-in-jsx-scope */

import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
//import {linkTo} from '@storybook/addon-links';

import Todo from '../src/components/Todo';
import TodoList from '../src/components/TodoList';

storiesOf('Todo', module).add('default', () => {
  return {
    components: {Todo},
    data() {
      return {
        todo: {text: 'Buy milk'}
      };
    },
    template: `<Todo
      :todo="this.todo"
      :onDeleteTodo="this.deleteAction"
      :onToggleDone="this.toggleAction"
    />`,
    methods: {
      deleteAction: action('deleted'),
      toggleAction: action('toggled')
    }
  };
});

storiesOf('TodoList', module).add('default', () => {
  return {
    components: {TodoList},
    template: '<TodoList />'
  };
});
