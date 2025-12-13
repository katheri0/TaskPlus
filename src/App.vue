<script setup>
import { RouterView } from 'vue-router';
import { saveToLocalStorage } from '@/utils/storage'
import { useTasksStore } from '@/stores/TasksStore';
import { useRoute } from 'vue-router';

const store = useTasksStore();
store.$subscribe((mutation, state) => {
  saveToLocalStorage('tasks', state.tasks)
})


</script>
<template>
  <RouterView />
</template>


<style scoped></style>