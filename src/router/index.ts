import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from "@/views/TeamView.vue";
import MineView from "@/views/MineView.vue";
import SearchView from "@/views/SearchView.vue";
import EditUserInfoView from "@/views/EditUserInfoView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/mine',
      name: 'mine',
      component: MineView,
    },
    {
      path: '/editUser',
      name: 'editUserInfo',
      component: EditUserInfoView,
    },

    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
  ],
})

export default router
