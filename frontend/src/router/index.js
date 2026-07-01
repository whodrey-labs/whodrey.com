import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import AboutMe from "@/views/AboutMe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/aboutme",
      component: AboutMe,
    },
    {
      path: "/",
      component: Home,
    },
  ],
});

export default router;
