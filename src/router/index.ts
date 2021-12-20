import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const NotFound = () =>
  import( /* webpackChunkName: "notfound" */ '@/components/NotFound.vue');

const Deals = () =>
  import( /* webpackChunkName: "deals" */ '@/views/deals/Deals.vue');

const DealDetail = () =>
  import( /* webpackChunkName: "deal-detail" */ '@/views/deals/DealDetail.vue');

const Stores = () =>
  import( /* webpackChunkName: "stores" */ '@/views/stores/Stores.vue');

const Games = () =>
  import( /* webpackChunkName: "games" */ '@/views/games/Games.vue');


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/deals',
  },

  {
    path: '/deals',
    name: 'Deals',
    component: Deals,

  },
  {
    path: '/stores',
    name: 'store',
    component: Stores
  },

  {
    path: '/games',
    name: 'games',
    component: Games
  },

  {
    path: '/deals/:dealID',
    name: 'deal.show',
    props: true,
    component: DealDetail
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
