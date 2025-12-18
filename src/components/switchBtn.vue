<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <div v-if="route.name.match('tasks')">
        <a class="note-btn" href="/notes">
            <b>Notes</b>
        </a>
    </div>
    <div v-if="route.name.match('notes')">
        <a class="task-btn" href="/tasks">
            <b>Tasks</b>
        </a>
    </div>
</template>

<style scoped>
.note-btn {
    background-color: #FFE45E;
    color: #FF6392;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    border: 2px solid #D3BD53;
    margin: 3px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

}

.task-btn {
    background-color: #D6D5FF;
    color: #3874D4;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    border: 2px solid #2F60C4;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

}
</style>