import { defineStore } from "pinia";
import { reactive, computed, ref } from "vue";
export const useModulStore = defineStore('Modules', () => {
    const isActive = ref(false);
    const activeModule = ref(null); // "add" or "edit"

    function openAddModule() {
        activeModule.value = "add";
        isActive.value = true;
    }

    function openEditModule() {
        activeModule.value = "edit";
        isActive.value = true;
    }

    function closeModule() {
        isActive.value = false;
        activeModule.value = null;
    }
    return {
        // avriables 
        isActive,
        activeModule,
        // functions  
        openAddModule,
        openEditModule,
        closeModule
    }
})
