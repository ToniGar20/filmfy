import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import DetailedMoviePage from "@/views/movies/DetailedMoviePage";
import MainMoviesPage from "@/views/movies/MainMoviesPage";
import MovieCategories from "@/views/movies/MovieCategories";
import MovieYear from "@/views/movies/MovieYear";

import MainListsPage from "@/views/lists/MainListsPage";
import DetailedListPage from "@/views/lists/DetailedListPage";

import Register from '../views/user/Register.vue'
import Login from '../views/user/Login.vue'

import UserProfile from '../views/user/UserProfile.vue'
import FormNewList from "@/components/lists/FormNewList";
import PersonlLists from "@/views/lists/PersonlLists";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/movies',
    name: 'movies',
    component: MainMoviesPage
  },
  {
    path: '/movies/:movie',
    name: 'movie-content',
    component: DetailedMoviePage
  },
  {
    path: '/movies/category/:category',
    name: 'movie-category',
    component: MovieCategories
  },
  {
    path: '/movies/years/:year',
    name: 'movie-year',
    component: MovieYear
  },

  {
    path: '/lists',
    name: 'lists',
    component: MainListsPage
  },

  {
    path: '/lists/new',
    name: 'lists-new',
    component: FormNewList
  },

  {
    path: '/my-lists/',
    name: 'my-lists',
    component: PersonlLists
  },

  {
    path: '/lists/:list',
    name: 'list-content',
    component: DetailedListPage
  },


  {
    path: '/userProfile',
    name: 'profile',
    component: UserProfile
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
