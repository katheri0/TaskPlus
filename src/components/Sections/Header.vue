<script setup>
</script>
<template>
  <header class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
    <div class="pointer-events-auto bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full px-6 py-3 flex items-center gap-8">
      <a href="#Home" class="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-full">
        <div class="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center transition-transform group-hover:scale-105 group-active:scale-95 shadow-sm">
          <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
        <span class="font-bold text-zinc-900 tracking-tight text-sm pr-2">TaskPlus</span>
      </a>
      <nav aria-label="Main navigation" class="hidden sm:block border-l border-zinc-200 pl-8">
        <ul class="flex items-center gap-6">
          <li><a class="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#Home">Home</a></li>
          <li><a class="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#features">Features</a></li>
          <li><a class="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#about-Us">About</a></li>
          <li><a class="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#developer">Developer</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
