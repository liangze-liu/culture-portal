import Vue from 'vue'
import App from './App.vue'
import { createRouter } from "./router";
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const router = createRouter();

// router.afterEach((to, from, next) => {
//   window.scrollTo(0, 0)
// })

// Vue.prototype.$video = Video //引入Video播放器

import { Empty } from 'vant';
Vue.use(Empty);
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
export function createApp () {
  const app = new Vue({
    router,
    store,
    mounted () {
      document.dispatchEvent(new Event('render-event'))
    },
    render: (h) => h(App),
  });
  return { app, router };
}

