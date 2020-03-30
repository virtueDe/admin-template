import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 格式化浏览器样式
import 'normalize.css';
import './assets/sass/_main.scss';

// UI 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/sass/element-variables.scss';

Vue.use(ElementUI, {});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
