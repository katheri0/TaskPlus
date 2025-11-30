import { defineStore } from "pinia";
import { reactive, computed, ref } from "vue";
export const useModulStore = defineStore('Modules', () => {
    let modelIsAcative = ref(false);
    function OpenModul() {
        modelIsAcative.value = true;
    }
    function CLoseModul() {
        modelIsAcative.value = false;

    }
    return {
        // variables, arrays 
        modelIsAcative,
        // functions
        CLoseModul,
        OpenModul
        //computed
    }
})
