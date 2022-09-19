import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/home/index.vue';
import Users from './../pages/users/index.vue';
import Alumbs from './../pages/albums/index.vue';
import Photos from './../pages/photos/index.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
  { path: '/users/:userId', component: Alumbs },
  { path: '/albums/:albumId', component: Photos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
