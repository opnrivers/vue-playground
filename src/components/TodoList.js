export default {
  name: 'TodoList',
  props: {
    items: Array,
  },
  methods: {
    removeTodo(index) {
      this.items.splice(index, 1);
    },
  },
};
