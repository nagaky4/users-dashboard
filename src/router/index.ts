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
        meta: {
          title: "DashBoard",
        },
      },
      {
        path: "/users/:id",
        name: "user-detail",
        component: () => import("@/views/UserDetail.vue"),
        meta: {
          title: "UsersDetail",
        },
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/Contact.vue"),
        meta: {
          title: "Contact",
        },
      },
      {
        path: "/not-found",
        name: "not-found",
        component: () => import("@/views/NotFound.vue"),
        meta: {
          title: "NotFound",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "NotFound",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router;
