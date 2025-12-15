<script setup>
import { RouterView } from 'vue-router';
import { saveToLocalStorage } from '@/utils/storage'
import { useTasksStore } from '@/stores/TasksStore';
import { useRoute } from 'vue-router';
import { useNotesStore } from './stores/NotesStore';
const store = useTasksStore();
const notesStore = useNotesStore();

store.$subscribe((mutation, state) => {
  saveToLocalStorage('tasks' , state.tasks)
})

notesStore.$subscribe((mutation, state) => {
  saveToLocalStorage('notes' , state.notes)
})


</script>
<template>
  <RouterView />
</template>


<style scoped></style>