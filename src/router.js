import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Category from './views/Category.vue'
// import Cart from './views/Cart.vue'
// import Profile from './views/Profile.vue'
let Home = () => import('./views/Home.vue')
let Category = () => import('./views/Category.vue')
let Cart = () => import('./views/Cart.vue')
let Profile = () => import('./views/Profile.vue')
import Ajax from './views/Ajax.vue'
import Detail from './views/Detail.vue'
import FooterBar from './components/FooterBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      components: {
        default: Home,
        'footer-bar': FooterBar
      },
      meta: {
        keepAlive: true
      }
    }, {
      path: '/category',
      name: 'category',
      components: {
        default: Category,
        'footer-bar': FooterBar
      },
      meta: {
        keepAlive: true
      }
    }, {
      path: '/cart',
      name: 'cart',
      components: {
        default: Cart,
        'footer-bar': FooterBar
      },
      meta: {
        keepAlive: true
      }
    }, {
      path: '/profile',
      name: 'profile',
      components: {
        default: Profile,
        'footer-bar': FooterBar
      },
      meta: {
        keepAlive: false
      }
    },{
      path: '/ajax',
      name: 'ajax',
      component: Ajax
    },{
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
