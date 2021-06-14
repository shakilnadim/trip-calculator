import { createRouter, createWebHistory } from "@ionic/vue-router";
import Trips from "../pages/Trips";

const routes = [
  {
    path: "/",
    component: Trips,
  },
  {
    path: "/trips/:id",
    component: () => import("../pages/TripDetails"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
