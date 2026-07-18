<script setup>
import featurecomponent from '../featureComponent.vue';
</script>
<template>
  <section id="features" class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-zinc-900">Everything you need</h2>
        <p class="mt-4 text-lg text-zinc-500 font-medium">Built for speed, designed for clarity.</p>
      </div>
      
      <div class="bg-[#fafafa] rounded-[2.5rem] border border-zinc-100 p-8 sm:p-12 shadow-sm">
         <featurecomponent />
      </div>
    </div>
  </section>
</template>