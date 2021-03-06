import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/Home.vue'),
    children: [

      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../components/Welcome.vue')
      },

      {
        path: '/users',
        name: 'user',
        component: () => import('../components/Users/Users.vue')
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../components/power/Roles.vue')
      },
      {
        path: "/rights",
        name: 'rights',
        component: () => import('../components/power/Rights.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../components/goods/Goods.vue')
      },
      {
        path: '/params',
        name: '/params',
        component: () => import('../components/goods/Params.vue')
      },
      {
        path: '/categories',
        name: "categories",
        component: () => import('../components/goods/Categories.vue')
      },
      {
        path: '/add',
        name: 'add',
        component: () => import('../components/goods/Add.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('../components/Orders.vue')
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import('../components/Reports.vue')
      },
    ]
  },


]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next();
  if (!window.sessionStorage.getItem('token'))
    return next('/login');
  next()
})

export default router