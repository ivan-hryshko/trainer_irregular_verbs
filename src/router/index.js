import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChooseTraining from '../components/choose-training';

// const REPO_NAME = '/trainer_irregular_verbs';

const routes = [
  {
    path: `/past_particle`,
    name: 'PastParticle',
    component: HomeView,
  },
  {
    path: ``,
    name: 'choose',
    component: ChooseTraining,
  },
  {
    path: `/`,
    name: 'choose',
    component: ChooseTraining,
  },
  {
    path: `/about`,
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
