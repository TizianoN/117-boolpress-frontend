import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import PostPage from './pages/PostPage.vue';
import BlogAdvancedFiltersPage from './pages/BlogAdvancedFiltersPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',

  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/blog',
      name: 'posts.index',
      component: BlogPage,
    },
    {
      path: '/post/:slug',
      name: 'posts.show',
      component: PostPage,
    },
    {
      path: '/category/:category_id',
      name: 'posts.filter-by-category',
      component: BlogPage,
    },
    {
      path: '/blog/advanced-filters',
      name: 'posts.advanced-filters',
      component: BlogAdvancedFiltersPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
});

export { router };
