<script setup>
import { useNotesStore } from '@/stores/NotesStore';
const notesStore = useNotesStore()

let newNote = { status: "Unread", priorityStatus: "Med priority",  }

</script>

<template>
    <div class="add-note">
        <h3>Add a new note</h3>
        <br>
        <label for="title">title*</label>
        <input v-model="newNote.name" type="text" name="title" placeholder="Enter a title..."><br />
        <br>
        <label for="description">description*</label>
        <textarea v-model="newNote.description" name="description" rows="4" placeholder="Enter a description..." /><br />
        <div class="btn-div"> <button @click="notesStore.addNote(newNote)" class="btn gray">Add Note</button></div>

    </div>
</template>

<style scoped>
.add-note {
    margin-top: 30px;

}

.add-note input,
.add-note textarea {
    width: 100%;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
    border: 2px solid #97a1b4;
    border-radius: 8px;

}

.add-note button {
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