import { defineStore } from "pinia";
import { reactive, computed, ref } from "vue";
import { useModulStore } from "./ModulStore";
import { loadFromLocalStorage } from "@/utils/storage";

export const useNotesStore = defineStore("notes", () => {
    // ---------- State ----------
    const notes = reactive(loadFromLocalStorage("notes", []));
    const filterByReadingStatus = ref("");

    const editedNote = ref({
        name: "",
        description: "",
    });
    const editedNoteId = ref(null);

    // ---------- Filters ----------
    function setFilterStatus(status) {
        filterByReadingStatus.value = status;
    }

    const filteredNotes = computed(() => {
        if (!filterByReadingStatus.value) return notes;

        return notes.filter(
            note => note.status === filterByReadingStatus.value
        );

    });

    // ---------- CRUD ----------
    function addNote(newNote) {
        if (!newNote.name || !newNote.description) {
            alert("Please fill all fields");
            return;
        }

        newNote.id = notes.length
            ? Math.max(...notes.map(note => note.id)) + 1
            : 1;

        notes.push(newNote);

        const modalStore = useModulStore();
        modalStore.closeModule();
    }

    function startEditNote(noteId) {
        const noteToEdit = notes.find(note => note.id === noteId);
        if (!noteToEdit) return;

        editedNote.value = {
            name: noteToEdit.name,
            description: noteToEdit.description,
        };

        editedNoteId.value = noteId;

        const modalStore = useModulStore();
        modalStore.openEditModule();
    }

    function updateNote() {
        const targetNote = notes.find(note => note.id === editedNoteId.value);
        if (!targetNote) return;

        targetNote.name = editedNote.value.name;
        targetNote.description = editedNote.value.description;

        const modalStore = useModulStore();
        modalStore.closeModule();
    }
    
    function deleteNote(noteId) {
        const noteIndex = notes.findIndex(note => note.id === noteId);
        if (noteIndex === -1) return;

        notes.splice(noteIndex, 1);
    }

    function toggleArchived(noteId) {
        const targetNote = notes.find(note => note.id === noteId);
        if (!targetNote) return;

        targetNote.completed = !targetNote.completed;
    }

        function toggleStatus(id) {
        notes.forEach(note => {
            if (note.id === id) {
                if (note.status === "Read") {
                    note.status = "Reading"
                }
                else if (note.status === "Reading") {
                    note.status = "Unread"
                }
                else {
                    note.status = "Read"
                }
            }
        })
    }
    function togglPriorityeStatus(id) {
        notes.forEach(note => {
            if (note.id === id) {
                if (note.priorityStatus === "High priority") {
                    note.priorityStatus = "Med priority"
                }
                else if (note.priorityStatus === "Med priority") {
                    note.priorityStatus = "Low priority"
                }
                else {
                    note.priorityStatus = "High priority"
                }
            }
        })
    }
    // ---------- Helpers ----------
    function getPriorityClass(priorityText) {
        if (priorityText === "High priority") return "High-priority";
        if (priorityText === "Med priority") return "Med-priority";
        if (priorityText === "Low priority") return "Low-priority";
        return "";
    }

    function getStatusClass(statusText) {
        if (statusText === "Reading") return "Reading";
        if (statusText === "Unread") return "Unread";
        if (statusText === "Read") return "Read";
        return "";
    }

    // ---------- Expose ----------
    return {
        // state
        notes,
        filterByReadingStatus,
        editedNote,
        editedNoteId,

        // actions
        setFilterStatus,
        addNote,
        startEditNote,
        updateNote,
        deleteNote,
        toggleArchived,
        getPriorityClass,
        getStatusClass,
        toggleStatus,
        togglPriorityeStatus,

        // computed
        filteredNotes,
    };
});
