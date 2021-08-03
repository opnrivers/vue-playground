import { ref } from 'vue';

export default {
  name: 'todo-input-group',
  props: {
    options: Array,
  },
  setup() {
    const todoItem = ref('');
    return { todoItem };
  },
  data() {
    return {
      className: this.options[0].value,
    };
  },
  methods: {
    selectedClassName() {
      this.$emit('selectedClassName', this.className);
    },
    addTodoItem(todoItem) {
      this.$emit('todoItem', todoItem);
      this.todoItem = '';
    },
  },
};
