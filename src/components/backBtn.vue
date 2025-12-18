<script setup>
function goBack() {
  window.history.back()
}
</script>

<template>
  <button
    type="button"
    class="btn  back-btn"
    @click="goBack"
    aria-label="العودة إلى الصفحة السابقة"
  >
    ← back
  </button>
</template>

<style scoped>
.back-btn {
  gap: 0.5rem;
  padding-inline: 1rem;
}
</style>
