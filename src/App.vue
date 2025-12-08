<script setup>
import { RouterView } from 'vue-router';
import { saveToLocalStorage } from '@/utils/storage'
// import TaskView from './view/TaskView.vue';
import HomeView from './view/HomeView.vue';
import { useTasksStore } from '@/stores/TasksStore';
const store = useTasksStore();
store.$subscribe((mutation, state) => {
  saveToLocalStorage('tasks', state.tasks)
})


</script>
<template>
  <HomeView />
  <RouterView />

</template>


<style scoped></style>