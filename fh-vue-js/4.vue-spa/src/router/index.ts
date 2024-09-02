import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //landing
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          props: true,
          component: () => import('@/modules/landing/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },

    // Auth
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
      ],
    },
    //not found
    {
      path: '/:pathMatch(.*)*',
      component: NotFound404,
    },
  ],
});

export default router;
