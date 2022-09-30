import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import MetodologyView from "./views/MetodologyView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/metodology", name: "Metodology", component: MetodologyView },
];
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});
  
export default router;
