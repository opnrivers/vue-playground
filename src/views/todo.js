import FormInputGroup from '../components/form-input-group.vue';
import FormSelect from '../components/form-select.vue';
import FormButton from '../components/form-button.vue';

export default {
  name: 'todo',
  components: {
    FormInputGroup,
    FormSelect,
    FormButton,
  },
  data() {
    return {
      priorities: [{
        label: 'High',
        id: 'high-priority',
      }, {
        label: 'Medium',
        id: 'medium-priority',
      }, {
        label: 'Low',
        id: 'low-priority',
      }],
      items: [],
      selected: 'high-priority',
      picked: 'all-priorities',
      input: '',
      filtered: [],
    };
  },
  mounted() {
    this.filtered = this.items;
  },
  methods: {
    addItem() {
      this.items.push({
        value: this.input,
        priority: this.selected,
      });

      this.input = '';
      this.picked = 'all-priorities';
      this.filterItems(this.picked);
    },
    removeItem(item, index) {
      this.filtered.splice(index, 1);

      if (this.picked !== 'all-priorities') {
        this.items.splice(this.items.indexOf(item), 1);
      }
    },
    filterItems(picked) {
      if (picked === 'all-priorities') {
        this.filtered = this.items;
      } else {
        this.filtered = this.items
          .filter((item) => item.priority === picked);
      }
    },
  },
};
