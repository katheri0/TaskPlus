<script setup>
import backBtn from '@/components/backBtn.vue';
import TaskList from '@/components/Tasks/TaskList.vue';
</script>

<template>
  <backBtn />
  <main >
 <TaskList />
  </main>

</template>


<style scoped>

main {
  padding-top: 60px !important;
}
</style>