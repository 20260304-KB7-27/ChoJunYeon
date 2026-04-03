import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/Home.vue') },
    { path: '/about', component: () => import('@/views/About.vue') },
    { path: '/todos', component: () => import('@/views/TodoList.vue') },
    { path: '/todos/add', component: () => import('@/views/AddTodo.vue') },
    {
      path: '/todos/edit/:id',
      component: () => import('@/views/EditTodo.vue'),
    },
    { path: '/:paths(.*)*', component: () => import('@/views/NotFound.vue') },
  ],
});

export default router;
