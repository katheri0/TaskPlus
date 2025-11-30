import { defineStore } from "pinia";
import { reactive, computed, ref } from "vue";
import { useModulStore } from "./ModulStore";

export const useTasksStore = defineStore('tasks', () => {
    const tasks = reactive(JSON.parse(localStorage.getItem('tasks')) || []);
    let filterBY = ref("");
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
            ModulStore.CLoseModul();
        }
        else {
            alert("fill the feilds")
        }
    }

    function toggleCompleted(id) {
        tasks.forEach(task => {
            if (task.id === id) {
                task.completed = !task.completed;
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

        // functions
        setFilter,
        addTask,
        toggleCompleted,
        getStatusClass,
        getStatusClassPriority,

        //computed
        filteredTasks,
    }
})
