export default {
  name: 'form-select',
  props: {
    modelValue: String,
    options: Array,
    option: String,
    value: String,
  },
  emits: ['update:modelValue'],
};
