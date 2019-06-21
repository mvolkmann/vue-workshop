import {mount} from '@vue/test-utils';
import TodoList from '../../src/components/TodoList';

describe('TodoList', () => {
  const PREDEFINED_TODOS = 2;

  function expectTodoCount(wrapper, count) {
    // Each todo has an <li> root element.
    const lis = wrapper.findAll('li');
    expect(lis.length).toBe(count);
  }

  test('should render', () => {
    const wrapper = mount(TodoList);
    const html = wrapper.html();
    expect(html).toContain('To Do List');
    expect(html).toContain('1 of 2 remaining');
    expect(html).toContain('Archive Completed');
    expectTodoCount(wrapper, PREDEFINED_TODOS);
  });

  test('should add a todo', () => {
    const wrapper = mount(TodoList);
    const input = wrapper.find('.todo-input');
    const text = 'buy milk';
    input.element.value = text;
    input.trigger('input');

    const addBtn = wrapper.find('.add-btn');
    addBtn.trigger('click');

    expectTodoCount(wrapper, PREDEFINED_TODOS + 1);
    const html = wrapper.html();
    expect(html).toContain(text);
  });

  test('should archive completed', () => {
    const wrapper = mount(TodoList);
    const archiveBtn = wrapper.find('.archive-btn');
    archiveBtn.trigger('click');
    expectTodoCount(wrapper, PREDEFINED_TODOS - 1);
    const html = wrapper.html();
    expect(html).toContain('1 of 1 remaining');
  });

  test('should delete a todo', () => {
    const wrapper = mount(TodoList);
    const deleteBtn = wrapper.find('.delete-btn'); // for first todo
    deleteBtn.trigger('click');
    expectTodoCount(wrapper, PREDEFINED_TODOS - 1);
  });

  test('should toggle a todo', () => {
    const wrapper = mount(TodoList);
    const checkboxes = wrapper.findAll('input[type="checkbox"]');
    expect(checkboxes.length).toBe(2);

    checkboxes.at(1).trigger('click'); // second todo
    let html = wrapper.html();
    expect(html).toContain('0 of 2 remaining');

    checkboxes.at(0).trigger('click'); // first todo
    html = wrapper.html();
    expect(html).toContain('1 of 2 remaining');
  });
});
