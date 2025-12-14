<script setup>
import { RouterView } from 'vue-router';
import { saveToLocalStorage } from '@/utils/storage'
import { useTasksStore } from '@/stores/TasksStore';
import { useRoute } from 'vue-router';
import { useNotesStore } from './stores/NotesStore';
const store = useTasksStore();
store.$subscribe((mutation, state) => {
  saveToLocalStorage('tasks ' | 'notes', state.tasks)
})


</script>
<template>
  <RouterView />
</template>


<style scoped></style>