const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Home', name: 'Home', component: HomeView },
    { path: '/Features', name: 'Features', component: Features },
    { path: '/about Us', name: 'about-Us', component: aboutUsView },
    { path: '/developers', name: 'developers', component: comp},
    { path: '/tasks', name: 'tasks', component: tasksView },
    { path: '/notes', name: 'Notes', component: NotesView },
    { path: '/:catchAll(.*)', name: 'not-found', component: notFoundView }
  ]
});

export default router;