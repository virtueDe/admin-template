import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@views/Layout.vue';

Vue.use(VueRouter);
const routerPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};
// 引入除开index.js以外的js文件
const files = require.context('.', true, /\.js$/);
let routerArray = [];
files.keys().forEach((key) => {
  if (key === './index.js') return;
  const exportDefault = files(key).default;
  // 设置默认第一个
  exportDefault.children.push({
    path: '',
    redirect: exportDefault.children.length
      ? exportDefault.children[0].path
      : '/home',
  });
  routerArray = routerArray.concat(exportDefault);
});

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@views/login/'),
    meta: {
      ignoreAuth: true,
    },
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@views/home/index'),
        meta: {
          title: '首页',
          HideBeradNav: true,
        },
      },
    ],
  },
  {
    path: '*',
    redirect: {
      path: '/home',
    },
  },
].concat(routerArray);

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
