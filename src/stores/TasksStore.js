import { defineStore } from "pinia";
import { reactive, computed, ref } from "vue";
import { useModulStore } from "./ModulStore";
import { loadFromLocalStorage } from '@/utils/storage'

export const useTasksStore = defineStore('tasks', () => {
    const tasks = reactive(loadFromLocalStorage('tasks', []))
    let filterBY = ref("");

    const editedTask = ref({
        name: "",
        description: ""
    });
    const editTaskId = ref(null);

    function setFilter(value) {
        filterBY.value = value;
    }

  
    const filteredTasks = computed(() => {
        switch (filterBY.value) {
            case 'To-Do':
                return tasks.filter(task => !task.completed);
            case 'Done':
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    }
    )

    function addTask(newTask) {
        if (newTask.name && newTask.description) {
            newTask.id = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
            tasks.push(newTask)
            const ModulStore = useModulStore();
            ModulStore.closeModule();
        }
        else {
            alert("fill the feilds")
        }
    }

    function startEditTask(selectedTaskId) {
        const taskToEdit = tasks.find(task => task.id === selectedTaskId);
        if (!taskToEdit) return;

        editedTask.value = {
            name: taskToEdit.name,
            description: taskToEdit.description
        };

        editTaskId.value = selectedTaskId;

        const modalStore = useModulStore();
        modalStore.openEditModule();
    }

    function updateTask() {
        const targetTask = tasks.find(task => task.id === editTaskId.value);
        if (!targetTask) return;

        targetTask.name = editedTask.value.name;
        targetTask.description = editedTask.value.description;

        const modalStore = useModulStore();
        modalStore.closeModule();
    }
    function deleteTask(taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex === -1) return;

        tasks.splice(taskIndex, 1);
    }
    function toggleCompleted(id) {
        tasks.forEach(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
        })
    }
    function toggleStatus(id) {
        tasks.forEach(task => {
            if (task.id === id) {
                if (task.status === "Active") {
                    task.status = "Inactive"
                }
                else {
                    task.status = "Active"
                }
            }
        })
    }
    function togglPriorityeStatus(id) {
        tasks.forEach(task => {
            if (task.id === id) {
                if (task.priorityStatus === "High priority") {
                    task.priorityStatus = "Med priority"
                }
                else if (task.priorityStatus === "Med priority") {
                    task.priorityStatus = "Low priority"
                }
                else {
                    task.priorityStatus = "High priority"
                }
            }
        })
    }
    // ---------- Helpers ----------
    function getStatusClassPriority(statusText) {
        if (statusText === 'High priority') return 'High-priority'
        if (statusText === 'Med priority') return 'Med-priority'
        if (statusText === 'Low priority') return 'Low-priority'

        return ''
    }
    function getStatusClass(statusText) {
        if (statusText === 'Active') return 'Active'
        if (statusText === 'Inactive') return 'Inactive'

        return ''
    }

    return {
        // variables, arrays 
        tasks,
        filterBY,
        editTaskId,
        editedTask,
        // functions
        setFilter,
        addTask,
        toggleCompleted,
        getStatusClass,
        getStatusClassPriority,
        startEditTask,
        updateTask,
        deleteTask,
        toggleStatus,
        togglPriorityeStatus,

        //computed
        filteredTasks,
    }
})
