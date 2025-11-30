import { defineStore } from "pinia";
import { reactive, computed, ref } from "vue";
export const useTasksStore = defineStore('tasks', () => {
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

    function addTask() {
        if (newTask.name && newTask.description) {
            newTask.id = Math.max(...tasks.map(task => task.id)) + 1;
            tasks.push(newTask)
            newTask = { status: "Inactive", priorityStatus: "Low priority", completed: false }
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
