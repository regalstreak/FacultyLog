import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from "./views/login/Login.vue";
import TimeTableCoordinator from "./views/timetable_coordinator/TimeTableCoordinator.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/ttc",
      component: TimeTableCoordinator
    }
  ]
})
