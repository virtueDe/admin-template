import Layout from '@views/Layout.vue';

export default {
  path: '/user',
  component: Layout,
  children: [
    {
      path: '/user',
      name: 'User',
      component: () => import('@views/user/index'),
      meta: {
        title: '用户',
      },
      children: [
        {
          path: '/user/add',
          name: 'UserAdd',
          component: () => import('@views/user/add'),
          meta: {
            title: '用户新增',
          },
        },
      ],
    },
  ],
};
