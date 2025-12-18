import { createRouter, createWebHistory } from "vue-router";
import TaskView from "@/view/TasksView.vue";
import notFoundView from "@/view/notFoundView.vue";
import HomeView from "@/view/HomeView.vue";
import NotesView from "@/view/NotesView.vue";
import forwardView from "@/view/forwardView.vue";
import NoteView from "@/view/NoteView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/tasks', name: 'tasks', component: TaskView },
    { path: '/notes', name: 'notes', component: NotesView },
    { path: '/forward', name: 'forward', component: forwardView },
    { path: '/Note-Viewing/:id', name: 'NoteViewing', component: NoteView },
    { path: '/:catchAll(.*)', name: 'not-found', component: notFoundView }
  ]
});

export default router;