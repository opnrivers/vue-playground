import { createApp } from 'vue';
import router from './router';
import 'bootstrap';
import './bootstrap/bootstrap.scss';
import App from './app.vue';

createApp(App).use(router).mount('#app');
