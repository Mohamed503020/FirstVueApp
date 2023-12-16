import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView";
import ProfileView from "../views/ProfileView";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "About",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    meta: {
      title: "Products",
    },
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: ProfileView,
    meta: {
      title: "Profile",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
