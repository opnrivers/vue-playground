import TodoInputGroup from '../components/todo-input-group.vue';
import TodoFilterByPriority from '../components/todo-filter-by-priority.vue';
import TodoList from '../components/todo-list.vue';

export default {
  name: 'todo',
  components: {
    TodoInputGroup,
    TodoFilterByPriority,
    TodoList,
  },
  data() {
    return {
      priorities: [{
        option: 'High',
        value: 'high-priority',
      }, {
        option: 'Medium',
        value: 'medium-priority',
      }, {
        option: 'Low',
        value: 'low-priority',
      }],
      className: 'high-priority',
      todoItem: '',
      todoItems: [],
      filteredTodoItems: [],
    };
  },
  methods: {
    selectedClassName(className) {
      this.className = className;
    },
    addTodoItem() {
      this.todoItems.push({
        value: this.todoItem,
        className: this.className,
      });

      this.filteredTodoItems = this.todoItems;
    },
    filterTodoItems(className) {
      const t = this;

      if (className === 'all-priorities') {
        t.filteredTodoItems = t.todoItems;
      } else {
        t.filteredTodoItems = t.todoItems
          .filter((item) => item.className === className);
      }
    },
  },
};
