import TodoInputGroup from '../components/TodoInputGroup.vue';
import TodoFilterByPriority from '../components/TodoFilterByPriority.vue';
import TodoList from '../components/TodoList.vue';

export default {
  name: 'Todo',
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
