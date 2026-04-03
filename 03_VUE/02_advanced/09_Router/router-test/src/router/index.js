import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      /*
      w중첩라우팅
      - 부모 컴포넌트 안에 <RouterView>를 두고 children 배열로 자식 라우트를 정의
      -자식 컴포넌트는 부모의 <RouterView> 위치에 랜더링
      */
      path: '/members-nested',
      component: () => import('@/pages/nested/MemberDefault.vue'),
      children: [
        {
          path: '',
          name: 'members-nested',
          component: () => import('@/pages/nested/MemberDefault.vue'),
        },
        {
          path: ':id',
          name: 'mambers-nested/detail',
          component: () => import('@/pages/nested/MemberDetail.vue'),
        },
      ],
    },
  ],
});

export default router;
