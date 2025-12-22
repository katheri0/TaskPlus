<script setup>
import BackButton from '@/components/backBtn.vue';
import NoteList from '@/components/Notes/NoteList.vue';
</script>

<template>
  <BackButton />
  <main>
    <NoteList />

  </main>
</template>

<style scoped>
main {
  padding-top: 60px !important;
}
</style>