<script setup>
import { useNotesStore } from '@/stores/NotesStore';

const notesStore = useNotesStore();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="note-card">
    <h3>
      <span>
        {{ note.name }}
      </span>

      <span ">
        <span :class="notesStore.getStatusClass(note.status)">
          <b>{{ note.status }}</b>
        </span>

        <span :class="notesStore.getPriorityClass(note.priorityStatus)">
          <b>{{ note.priorityStatus }}</b>
        </span>
      </span>
    </h3>

    <p>
      {{ note.description }}
    </p>

    <div>
      <button class="Delete-btn" @click="notesStore.deleteNote(note.id)">
        <b>Delete</b>
      </button>

      <button class="Edit-btn" @click="notesStore.startEditNote(note.id)">
        <b>Edit</b>
      </button>
    </div>
  </div>
</template>


<style scoped>
.Edit-btn {
  background-color: #D6D5FF;
  color: #2F60C4;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  border: 2px solid #2F60C4;
  cursor: pointer;
}

.Delete-btn {
  background-color: #FFD5D5;
  color: #FF3D3D;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  border: 2px solid #FF3D3D;
  margin: 3px;
  cursor: pointer;
}

.High-priority {
  background-color: #D6D5FF;
  color: #403DFF;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;

}

.Med-priority {
  background-color: #FFF4C8;
  color: #FFC23D;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;

}

.Low-priority {
  background-color: #FFD5D5;
  color: #FF3D3D;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
}

.Unread{
  background-color: #FFD5D5;
  color: #FF3D3D;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
}

.Reading {
  background-color: #d5ffd8;
  color: #3dff4a;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
}

.Read {
  background-color: #FFF4C8;
  color: #FFC23D;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
}

span span {
  padding: 5px;

}

.note-card {
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  color: var(--black-color);
  padding: 20px;
  border-radius: 12px;
  position: relative;
  width: auto;
}

.note-card h3 {
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

.task h3>span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
}

.task h3>span:last-child {
  display: flex;
  gap: 6px;
  white-space: nowrap;
  flex-shrink: 0;
}

.task p {
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
}


.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>