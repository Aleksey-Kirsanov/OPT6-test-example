import { createRouter, createWebHashHistory } from "vue-router";
import ExpensesView from "./views/ExpensesView.vue";
import GeneralView from "./views/GeneralView.vue";
import GoodsView from "./views/GoodsView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: GeneralView,
    },
    {
      path: "/goods",
      component: () => GoodsView,
    },
    {
      path: "/expenses",
      component: () => ExpensesView,
    },
  ],
});
