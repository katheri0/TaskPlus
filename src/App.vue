<script setup>
import { reactive, ref, computed } from 'vue';
import TaskCard from './components/TaskCard.vue';
import Filter from './components/Filter.vue';
import ModulWindow from './components/Modules/ModulWindow.vue';
import AddTaskModul from './components/Modules/AddTaskModul.vue';
import { useTasksStore } from './stores/TasksStore';

const store = useTasksStore();

let newTask = { status: "Inactive", priorityStatus: "Low priority", completed: false }

let modelIsAcative = ref(false);

 

</script>

<template>

  <main class="">
    <div class="header">
      <div class="header-side">
        <h1>
          TaskPlus-Tasks Manager
        </h1>
      </div>
      <div class="header-side">
        <button type="button" @click="modelIsAcative = true" class="btn secondary">Add a Task</button>
      </div>
    </div>

    <Filter />

    <div class="tasks">
      <taskCard  v-for="(task, index) in store.filteredTasks" :key="index"
        :task="task" />
    </div>


    <ModulWindow @closePopup="modelIsAcative = flase" v-if="modelIsAcative">
      <AddTaskModul />
    </ModulWindow>

  </main>



</template>


<style scoped>
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



.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .tasks {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>