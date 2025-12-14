import { createRouter, createWebHistory } from "vue-router";
import TaskView from "@/view/TasksView.vue";
import notFoundView from "@/view/notFoundView.vue";
import HomeView from "@/view/HomeView.vue";
import NotesView from "@/view/NotesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/tasks', name: 'tasks', component: TaskView },
    { path: '/notes', name: 'Notes', component: NotesView },
    { path: '/:catchAll(.*)', name: 'not-found', component: notFoundView }
  ]
});

export default router;