<script setup>
import { useTasksStore } from '@/stores/TasksStore';
const taskstore = useTasksStore()

let newTask = { status: "Active", priorityStatus: "Med priority", completed: false }

</script>

<template>
    <div class="add-task">
        <h3>Add a new task</h3>
        <br>
        <span class="center"><label for="title">title*</label> <span class="red">Note: statues have  default values, toggle to change  </span></span>
        <input v-model="newTask.name" type="text" name="title" placeholder="Enter a title..."><br />
        <br>
        <label for="description">description*</label>
        <textarea v-model="newTask.description" name="description" rows="4" placeholder="Enter a description..." /><br />
        <div class="btn-div"> <button @click="taskstore.addTask(newTask)" class="btn gray">Add Task</button></div>

    </div>
</template>

<style scoped>
.add-task {
    margin-top: 30px;

}

.add-task input,
.add-task textarea {
    width: 100%;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
    border: 2px solid #97a1b4;
    border-radius: 8px;

}

.add-task button {
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
.red
{
    color: #ff0000;
    font-weight: 700;

}
.center
{
    display: flex;
    justify-content: space-between;
}
</style>