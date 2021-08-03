export default {
  name: 'TodoFilterByPriority',
  props: {
    options: Array,
  },
  methods: {
    filterTodoItems(className) {
      this.$emit('filterTodoItems', className);
    },
  },
};
