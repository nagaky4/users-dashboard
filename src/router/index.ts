import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Default from "@/layouts/Default.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "default-layout",
    component: Default,
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("@/views/DashBoard.vue"),
      },
      {
        path: "/users/:id",
        name: "user-detail",
        component: () => import("@/views/UserDetail.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/Contact.vue"),
      },
      {
        path: "/not-found",
        name: "not-found",
        component: () => import("@/views/NotFound.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
