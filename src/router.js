import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/home.vue';
import Todo from './views/todo.vue';

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
}, {
  path: '/todo',
  name: 'todo',
  component: Todo,
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
