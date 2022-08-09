import { Guard, useGuard } from "@/composables/useGuard";
import store from "@/store";
import { createRouter, createWebHistory } from "vue-router";
import { authenUser } from "@/services/auth";

export const routes = {
  home: {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      guard: Guard.AUTH,
    },
  },
  login: {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/LoginPage.vue"),
    meta: {
      guard: Guard.NOT_AUTH,
    },
  },
  about: {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  notFound: {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/HomeView.vue"),
  },
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.values(routes),
});

router.beforeEach(async (to, from, next) => {
  if (!store.state.persistUser.isFetchedAuth) {
    const data = await authenUser();
    store.commit("persistUser/setIsFetchedAuth", true);
    if (data) {
      store.commit("persistUser/setUser", data);
    }
  }
  const { meta } = to;
  const guard = meta.guard as Guard;
  if (!guard) next();
  else {
    const guardResult = useGuard(guard);
    if (guardResult) {
      next(guardResult);
    } else next();
  }
});

export default router;
