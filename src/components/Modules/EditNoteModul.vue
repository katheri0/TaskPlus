<script setup>
import { useNotesStore } from '@/stores/NotesStore';
const notesStore = useNotesStore()

</script>

<template>
    <div class="edit-note">
        <h3>Edit a task</h3>
        <br>
        <label for="title">title*</label>
        <input v-model="notesStore.editedNote.name" type="text" placeholder="Enter a title..."><br />
        <br>
        <label for="description" >description*</label>
        <textarea  v-model="notesStore.editedNote.description" rows="4" placeholder="Enter a description..." /><br />
    <div class="btn-div">
      <button @click="notesStore.updateNote()" class="btn gray">
        Save Changes
      </button>
    </div>
    </div>
</template>

<style scoped>
.edit-note {
    margin-top: 30px;

}

.edit-note input,
.edit-note textarea {
    width: 100%;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
    border: 2px solid #97a1b4;
    border-radius: 8px;

}

.edit-note button {
    width: 247px;
    margin-top: 12px;
    background-color: #375E9D;
    color: white;
    font-size: 20px;
}

.btn-div {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>