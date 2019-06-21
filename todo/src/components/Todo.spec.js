import {mount, shallowMount} from '@vue/test-utils';
import Todo from '../../src/components/Todo';

describe('Todo', () => {
  const text = 'buy milk';
  const todo = {text, done: false};

  test('should match snapshot', () => {
    const wrapper = mount(Todo, {
      propsData: {onDeleteTodo() {}, onToggleDone() {}, todo}
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should render', () => {
    const wrapper = shallowMount(Todo, {
      propsData: {onDeleteTodo() {}, onToggleDone() {}, todo}
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox).not.toBeNull();
    const html = wrapper.html();
    expect(html).toContain(text); // the todo text
    expect(html).toContain('Delete'); // the button
  });

  test('should handle Delete button', () => {
    const onDeleteTodo = jest.fn();
    const wrapper = shallowMount(Todo, {
      propsData: {
        onDeleteTodo,
        onToggleDone() {},
        todo
      }
    });
    const deleteBtn = wrapper.find('button');
    deleteBtn.trigger('click');
    expect(onDeleteTodo).toHaveBeenCalled();
  });

  test('should toggle done', () => {
    const onToggleDone = jest.fn();
    const wrapper = shallowMount(Todo, {
      propsData: {
        onDeleteTodo() {},
        onToggleDone,
        todo
      }
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.trigger('click');
    expect(onToggleDone).toHaveBeenCalled();
  });
});
