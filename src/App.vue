<script setup>
import { reactive, ref,computed } from 'vue';
import TaskCard from './components/TaskCard.vue';
import Filter from './components/Filter.vue';
const tasks = reactive([
  {
    name: "Website design",
    description: "Define the style guide, branding and create the webdesign on Figma.",
    completed: true,
    status: "Active",
    priorityStatus: "High priority",
    id: 1
  },
  {
    name: "Website development",
    description: "Develop the portfolio website using Vue JS.",
    completed: false,
    status: "Active",
    priorityStatus: "Med priority",
    id: 2
  },
  {
    name: "Hosting and infrastructure",
    description: "Define hosting, domain and infrastructure for the portfolio website.",
    completed: false,
    status: "Active",
    priorityStatus: "Low priority",
    id: 3
  },
  {
    name: "Composition API",
    description: "Learn how to use the composition API and how it compares to the options API.",
    completed: true,
    status: "Inactive",
    priorityStatus: "Med priority",
    id: 4
  },
  {
    name: "Pinia",
    description: "Learn how to setup a store using Pinia.",
    completed: true,
    status: "Active",
    priorityStatus: "Med priority",
    id: 5
  },
  {
    name: "Groceries",
    description: "Buy rice, apples and potatos.",
    completed: false,
    status: "Active",
    priorityStatus: "Med priority",
    id: 6
  },
  {
    name: "Bank account",
    description: "Open a bank account for my freelance business.",
    completed: false,
    status: "Active",
    priorityStatus: "Med priority",
    id: 7
  }
]);

let newTask = { status: "Inactive", priorityStatus: "Low priority", completed: false }

let filterBY = ref("");

const filteredTasks =computed(()=>
{
  switch(filterBY.value)
  {
    case 'To-Do':
    return tasks.filter(task => !task.completed);
    break;
    case 'Done':
    return tasks.filter(task => task.completed);
    break;
    default:
      return tasks;
  }
}
)

function addTask() {
  if (newTask.name && newTask.description) {
    newTask.id =Math.max(...tasks.map(task => task.id)) + 1;
    tasks.push(newTask)
    newTask = { status: "Inactive", priorityStatus: "Low priority", completed: false }
  }
  else {
    alert("fill the feilds")
  }
}

function toggleCompleted(id)
{
  tasks.forEach(task => 
  {
    if(task.id === id)
    {
      task.completed = !task.completed;
    }
  })
}
function setFilter(value)
{
filterBY.value = value;
}
</script>

<template>

  <main class="">
    <div class="header">
      <div class="header-side">
        <h1>
          TaskPlus-Tasks Manager
        </h1>
      </div>
    </div>

   <Filter :filterBY="filterBY" @setFilter="setFilter"/>

    <div class="tasks">
      <taskCard @toggleCompleted ="toggleCompleted(task.id)" v-for="(task, index) in filteredTasks" :key="index" :task="task" />
    </div>

    <div class="add-task">
      <h3>Add a new task</h3>
      <input v-model="newTask.name" type="text" name="title" placeholder="Enter a title..."><br />
      <textarea v-model="newTask.description" name="description" rows="4" placeholder="Enter a description..." /><br />
      <button @click="addTask()" class="btn gray">Add Task</button>

    </div>

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


.add-task {
  margin-top: 60px;
}

.add-task input,
.add-task textarea {
  width: 360px;
  max-width: 100%;
  margin-top: 12px;
  padding: 5px;
}

.add-task button {
  width: 360px;
  margin-top: 12px;
}
</style>