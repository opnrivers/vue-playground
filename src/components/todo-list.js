export default {
  name: 'todo-list',
  props: {
    items: Array,
  },
  methods: {
    removeTodo(index) {
      this.items.splice(index, 1);
    },
  },
};
