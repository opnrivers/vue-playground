import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/home.vue';
import Todo from './views/todo.vue';
import BsComponents from './views/bs-components.vue';

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
}, {
  path: '/todo',
  name: 'todo',
  component: Todo,
}, {
  path: '/bs-components',
  name: 'bs-components',
  component: BsComponents,
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
