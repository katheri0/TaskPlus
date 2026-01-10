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
    <h1 class="note-title">

      <span class="pointy-name" v-if="!notesStore.isInlineNameEditing" @dblclick="notesStore.startInlineNameEdit(note.id)">
        {{ note.name }}
      </span>
    <input
      v-else
      v-model="notesStore.editedInlineName.name"
      class="note-title-editor"
      type="text"
      @keydown.enter.prevent="notesStore.saveInlineName()"
      @keydown.esc.prevent="notesStore.cancelInlineNameEdit()"
      @blur="notesStore.saveInlineName()"
      autofocus
    />
      <span class="note-meta">
        <span @click=" notesStore.toggleStatus(note.id)" :class="notesStore.getStatusClass(note.status)">
          {{ note.status }}
        </span>

        <span @click=" notesStore.togglPriorityeStatus(note.id)"
          :class="notesStore.getPriorityClass(note.priorityStatus)">
          {{ note.priorityStatus }}
        </span>
      </span>
    </h1>
    <div class="WR">
      <div class="imgs">
        <button class="btn" v-if="notesStore.isEditing" @click="notesStore.updateEditingNoteDescription()">Save</button>
        <img v-if="!notesStore.isEditing" @click="notesStore.startEditingNoteDescription(note.id)"
          src="/src/assets/images/edit.svg" alt="edit" />
        <img @click="notesStore.stopEditingNoteDescription()" src="/src/assets/images/Book open.svg" alt="book" />
      </div>
    </div>
    <article v-if="!notesStore.isEditing" class="note-content">
      {{ note.description }}
    </article>
    <article v-else>
      <textarea v-model="notesStore.editedNoteDescription.description" @input="$event.target.style.height = 'auto';
      $event.target.style.height = $event.target.scrollHeight + 'px';" class="note-editor" />
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
  padding: 32px 28px;
  background-color: var(--white-color);
  color: var(--black-color);
  border-radius: 16px;
   margin-top: 25px;

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
  white-space: pre-wrap;
  margin-top: 10px;
  font-size: 1rem;
  line-height: 1.7;
  color: #222;
  padding: 16px;
}

/* ===== Reused chip styles  ===== */

.High-priority {
  background-color: #D6D5FF;
  color: #403DFF;
  padding: 7px 10px;;
  border-radius: 10px;
  font-size: 17px;
  margin: 10px;
  cursor: pointer;
}

.Med-priority {
  background-color: #FFF4C8;
  color: #FFC23D;
  padding: 7px 10px;;
  border-radius: 10px;
  font-size: 17px;
  margin: 10px;
  cursor: pointer;

}

.Low-priority {
  background-color: #FFD5D5;
  color: #FF3D3D;
  padding: 7px 10px;;
  border-radius: 10px;
  font-size: 17px;
  margin: 10px;
  cursor: pointer;


}

.Unread {
  background-color: #FFD5D5;
  color: #FF3D3D;
  padding: 7px 10px;;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;

}

.Reading {
  background-color: #FFE299;
  color: #FF7621;
  padding: 7px 10px;;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;

}

.Read {
  background-color: #D5FFD8;
  color: #3DFF4A;
  padding: 7px 10px;;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;

}

.WR {
  padding-right: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: end;
}

.imgs {
  display: flex;
  gap: 12px;
}

.imgs img {
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 0.15s ease, transform 0.1s ease;
}

.imgs img:hover {
  background-color: #e6e6e6;
}

.imgs img:active {
  background-color: #dcdcdc;
  transform: scale(0.95);
}

.note-editor {
  width: 100%;
  min-height: 450px;

  /* Typography parity */
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.7;
  color: #222;

  /* Layout parity */
  padding: 16px;
  box-sizing: border-box;
  width: 100%;

  /* Remove textarea "UI-ness" */
  border: none;
  outline: none;
  resize: vertical;
  background: transparent;

  /* Text behavior like article */
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

.btn {
  cursor: pointer;
  margin: 8px;
}

.note-title-editor {
  font: inherit;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.2;
  width: 60%;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  border-bottom: 2px solid #ddd;
}

.note-title-editor:focus {
  border-bottom-color: #999;
}
.pointy-name
{
  cursor: pointer;
}
</style>
