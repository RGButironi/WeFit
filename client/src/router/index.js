import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Workout from '../views/Workout.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import { CurrentUser } from '../models/Users'
import AdminLogin from '../views/AdminLogin.vue'
import { CurrentAdmin } from '../models/Admin'
import ExercisePerform from "../views/ExercisePerform.vue"
import AdminWorkbench from "../views/AdminWorkbench.vue"
import UserProfile from "../views/UserProfile.vue"
import NewsFeed from "../views/NewsFeed.vue"
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/workout', name: 'Workout', component: Workout, meta: {isSecret: true} },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/login', name: 'Login', component: Login },
  { path: '/adminlogin', name: 'AdminLogin', component: AdminLogin },
  { path: "/exercise/:id", name: "exercise-perform", component: ExercisePerform, params: true },
  { path: '/adminworkbench', name: 'AdminWorkbench', component: AdminWorkbench },
  { path: '/userprofile', name: 'UserProfile', component: UserProfile },
  { path: '/newsfeed', name: 'NewsFeed', component: NewsFeed },
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach( (to, from, next)=> {
  if( to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});

/* implement later: router.beforeEach( (to, from, next) => {
  if(to.meta.isSecret && !CurrentAdmin) next('/adminlogin');
  else next();
});*/

export default router
