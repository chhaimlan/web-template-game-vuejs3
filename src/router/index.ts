import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from "../views/Index.vue";
import Casino from "../views/Casino.vue";
import Lottery from "../views/Lottery.vue";
import Number from "../views/Number.vue";
import Slots from "../views/Slots.vue";
//import Sports from "../views/Sports.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/casino",
    name: "Casino",
    component: Casino
  },
  {
    path: "/lottery",
    name: "Lottery",
    component: Lottery
  },
  {
    path: "/number",
    name: "Number",
    component: Number
  },
  {
    path: "/slots",
    name: "Slots",
    component: Slots
  },
  {
    path: "/slots",
    name: "Slots",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Slots.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
