<script setup>
import NoteCard from '@/components/Notes/NoteCard.vue';
import Filter from '@/components/Filter.vue';
import ModalWindow from '@/components/Modules/ModulWindow.vue';
import EditNoteModul from '@/components/Modules/EditNoteModul.vue';
import BackButton from '@/components/backBtn.vue';
import { useModulStore } from '@/stores/ModulStore';
import { useNotesStore } from '@/stores/NotesStore';
import AddNoteModul from '@/components/Modules/AddNoteModul.vue';
import SwitchBtn from '@/components/switchBtn.vue';
const notesStore = useNotesStore();
const modalStore = useModulStore();
</script>

<template>
  <BackButton />

  <main>
    <header class="header">
      <div class="header-side">
        <h1>TaskPlus-Notes Manager</h1>
      </div>
      <div class="header-side">
        <button type="button" class="btn secondary" @click="modalStore.openAddModule()">
          Add a Note
        </button>
      </div>
    </header> 
    <br>
    <SwitchBtn />
    <Filter :filter-value="notesStore.filterByReadingStatus" :options="[
      { label: 'Unread', value: 'Unread' },
      { label: 'Reading', value: 'Reading' },
      { label: 'Read', value: 'Read' }
    ]" :on-select="notesStore.setFilterStatus" 
    :on-clear="() => notesStore.setFilterStatus('')" />
    <section class="notes">
      <NoteCard v-for="note in notesStore.filteredNotes" :key="note.id" :note="note" />
    </section>

    <ModalWindow v-if="modalStore.isActive">
      <AddNoteModul v-if="modalStore.activeModule === 'add'" />
      <EditNoteModul v-if="modalStore.activeModule === 'edit'" />
    </ModalWindow>
  </main>
</template>

<style scoped>
body {
  background-color: #FFE45E;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header .header-side {
  display: flex;
  align-items: center;
}

.header .header-side h1 {
  text-transform: capitalize;
  font-size: 42px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
}

.header .header-side .secondary {
  margin-left: 12px;
}



.notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .notes {
    grid-template-columns: 1fr;
  }
}

main {
  padding-top: 60px !important;
}
</style>