import { createApp } from 'vue';
import router from './router';
import 'bootstrap';
import './bootstrap/bootstrap.scss';
import App from './app.vue';
import { capitalize } from './filters';

const app = createApp(App);

app.config.globalProperties.$filters = {
  capitalize,
};

app.use(router).mount('#app');
