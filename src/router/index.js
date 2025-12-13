import { createRouter, createWebHistory } from "vue-router";
import TaskView from "@/view/TaskView.vue";
import notFoundView from "@/view/notFoundView.vue";
import HomeView from "@/view/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    // { path: '/Features', name: 'Features', component: FeaturesView },
    // { path: '/about-Us', name: 'about-Us', component: AboutUsView },
    // { path: '/developer', name: 'developer', component: developerView },
    { path: '/tasks', name: 'tasks', component: TaskView },
    // { path: '/notes', name: 'Notes', component: NotesView },
    { path: '/:catchAll(.*)', name: 'not-found', component: notFoundView }
  ]
});

export default router;