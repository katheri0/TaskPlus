<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useNotesStore } from '@/stores/NotesStore'

const route = useRoute()
const notesStore = useNotesStore()

const noteId = route.params.id;
const note = computed(() =>
  notesStore.getNoteById(noteId)
)
</script>


<template>
  <section v-if="note" class="note-view">
    <h1 class="note-title">{{ note.name }}

      <span class="note-meta">
        <span @click=" notesStore.toggleStatus(note.id)" :class="notesStore.getStatusClass(note.status)">
          {{ note.status }}
        </span>

        <span @click=" notesStore.togglPriorityeStatus(note.id)"  :class="notesStore.getPriorityClass(note.priorityStatus)">
          {{ note.priorityStatus }}
        </span>
      </span>
    </h1>
    <article class="note-content">
      {{ note.description }}
    </article>
  </section>

  <p v-else>
    Note not found.
  </p>
</template>


<style scoped>
/* ===== Reading View ===== */

.note-view {
  max-width: 100%;
  height: 600px;
  padding: 32px 28px;
  background-color: var(--white-color);
  color: var(--black-color);
  border-radius: 16px;
}

.note-title {
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
}

.note-meta h1 {
  font-size: 20px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  gap: 10px;
}

.note-content {
  font-size: 18px;
  line-height: 1.7;
  white-space: pre-wrap;
}

/* ===== Reused chip styles (unchanged) ===== */

.High-priority {
  background-color: #D6D5FF;
  color: #403DFF;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  margin: 10px;
  cursor: pointer;
}

.Med-priority {
  background-color: #FFF4C8;
  color: #FFC23D;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  margin: 10px;
  cursor: pointer;

}

.Low-priority {
  background-color: #FFD5D5;
  color: #FF3D3D;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  margin: 10px;
  cursor: pointer;


}

.Unread {
  background-color: #FFD5D5;
  color: #FF3D3D;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;

}

.Reading {
  background-color: #d5ffd8;
  color: #3dff4a;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;

}

.Read {
  background-color: #FFF4C8;
  color: #FFC23D;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;

}
</style>
