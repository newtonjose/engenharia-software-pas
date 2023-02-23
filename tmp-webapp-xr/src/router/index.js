import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SceneView from "../views/SceneView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/session",
      name: "scene",
      component: SceneView,
    },
  ],
});

export default router;
