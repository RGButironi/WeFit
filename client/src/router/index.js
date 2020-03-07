import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Workout from '../views/Workout.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import { CurrentUser } from '../models/Users'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/workout', name: 'Workout', component: Workout, meta: {isSecret: true} },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/login', name: 'Login', component: Login },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  routes
});

router.beforeEach( (to, from, next)=> {
  if( to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});

export default router
