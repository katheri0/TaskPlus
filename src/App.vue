<script setup>
import { RouterView } from 'vue-router';
import { saveToLocalStorage } from '@/utils/storage'
// import TaskView from './view/TaskView.vue';
import HomeView from './view/HomeView.vue';
import developerView from './view/developerView.vue';
import AboutUsView from './view/AboutUsView.vue';
import FeaturesView from './view/FeaturesView.vue';
import FooterView from './view/FooterView.vue';
import { useTasksStore } from '@/stores/TasksStore';

const store = useTasksStore();
store.$subscribe((mutation, state) => {
  saveToLocalStorage('tasks', state.tasks)
})


</script>
<template>
  <HomeView />
  <FeaturesView />
  <br>
  <AboutUsView />
  <br>
  <developerView />
  <br>

  <RouterView />
  <FooterView />

</template>


<style scoped></style>