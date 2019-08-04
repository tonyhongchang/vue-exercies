import Vue from 'vue'
import Router from 'vue-router'
import Layout from "../views/layout/Layout";


Vue.use(Router)

export const constantRouterMap=[
  {
    path:"",
    component:Layout,
  }
]

export default new Router({
  routes: constantRouterMap
})
