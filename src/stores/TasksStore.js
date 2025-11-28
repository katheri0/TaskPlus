import { defineStore } from "pinia";
import { reactive } from "vue";
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
    return { tasks }
})
