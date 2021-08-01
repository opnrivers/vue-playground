import { createApp } from 'vue';
import router from './router';
import 'bootstrap';
import './bootstrap/bootstrap.scss';
import App from './App.vue';

createApp(App).use(router).mount('#app');
