import { createRouter, createWebHistory } from 'vue-router';
import Explnt from '../views/Explanation.vue';
import Demo from '../views/demo.vue';

const routes = [
  { path: '/', component: Explnt },
  { path: '/demo', component: Demo }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;