<script setup>
function goBack() {
  window.history.back()
}
</script>

<template>
  <button
    type="button"
    class="btn secondary back-btn"
    @click="goBack"
    aria-label="العودة إلى الصفحة السابقة"
  >
    ← رجوع
  </button>
</template>

<style scoped>
.back-btn {
  gap: 0.5rem;
  padding-inline: 1rem;
}
</style>
