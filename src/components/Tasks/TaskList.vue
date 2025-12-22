<script setup>
import TaskCard from '@/components/Tasks/TaskCard.vue';
import Filter from '@/components/Filter.vue';
import ModulWindow from '@/components/Modules/ModulWindow.vue';
import AddTaskModul from '@/components/Modules/AddTaskModul.vue';
import EditTaskModul from '@/components/Modules/EditTaskModul.vue';
import SwitchBtn from '@/components/SwitchBtn.vue';
import { useModulStore } from '@/stores/ModulStore';
import { useTasksStore } from '@/stores/TasksStore';
const taskStore = useTasksStore();
const ModulStore = useModulStore();
</script>

<template>
    <div class="header">
      <div class="header-side">
        <h1>
          TaskPlus-Tasks Manager
        </h1>
      </div>
      <div class="header-side">
        <button type="button" @click="ModulStore.openAddModule()" class="btn secondary">Add a Task</button>
      </div>
    </div>
        <br>
    <SwitchBtn />

    <Filter :filter-value="taskStore.filterBY" :options="[
      { label: 'To-Do', value: 'To-Do' },
      { label: 'Done', value: 'Done' }
    ]" :on-select="taskStore.setFilter" :on-clear="() => taskStore.setFilter('')" />
    <div class="tasks">
      <taskCard v-for="(task, index) in taskStore.filteredTasks" :key="index" :task="task" />
    </div>


    <ModulWindow v-if="ModulStore.isActive">

      <AddTaskModul v-if="ModulStore.activeModule === 'add'" />

      <EditTaskModul v-if="ModulStore.activeModule === 'edit'" />

    </ModulWindow>

</template>

<style scoped>
body {
  background-color: #1F2C47 !important;
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
  color: white;
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