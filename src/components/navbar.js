export default {
  name: 'navbar',
  props: {
    title: String,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.toggle);
    window.dispatchEvent(new Event('resize'));
  },
  unmounted() {
    window.removeEventListener('resize', this.toggle);
  },
  methods: {
    toggle() {
      this.show = window.innerWidth >= 992;
    },
  },
};
