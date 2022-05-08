import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const REPO_NAME = '/trainer_irregular_verbs';

const routes = [
  {
    path: `${REPO_NAME}`,
    name: 'home',
    component: HomeView,
  },
  {
    path: `${REPO_NAME}/about`,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
