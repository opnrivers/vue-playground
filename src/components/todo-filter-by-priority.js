export default {
  name: 'todo-filter-by-priority',
  props: {
    options: Array,
  },
  methods: {
    filterTodoItems(className) {
      this.$emit('filterTodoItems', className);
    },
  },
};
