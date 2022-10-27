import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/tableTemplatePage",
      name: "tableTemplatePage",
      component: () => import("@/views/TableTemplatePage.vue"),
    },
  ],
});

export default router;
