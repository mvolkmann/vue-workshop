import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
//import {linkTo} from '@storybook/addon-links';

import Arrow from '../src/components/Arrow';
import Todo from '../src/components/Todo';
import TodoList from '../src/components/TodoList';

storiesOf('Arrow', module)
  .add('default', () => ({
    components: {Arrow},
    template: '<Arrow :height="100" :width="200" />'
  }))
  .add('custom', () => ({
    components: {Arrow},
    template:
      '<Arrow fill="yellow" :height="100" stroke="blue" :strokeWidth="5" :width="200" />'
  }));

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
