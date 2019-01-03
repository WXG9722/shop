import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

// 按需引入 推荐
import {Toast, CellGroup, Field, Tab, Tabs, NavBar, Icon, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Button} from 'vant'
Vue.use(Toast).use(CellGroup).use(Field).use(Tab).use(Tabs).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Button)

import '@/mock/mock.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
