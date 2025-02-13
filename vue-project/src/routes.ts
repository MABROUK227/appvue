import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '/Users/mabroukadjaho/Downloads/mabrouk/appvue/vue-project/src/views/HomeView.vue';  // Chemins relatifs corrigés
import LoginView from '/Users/mabroukadjaho/Downloads/mabrouk/appvue/vue-project/src/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
});

export default router;
