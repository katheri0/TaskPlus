<template>
  <section id="Home" class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#fafafa]">
    <!-- Ambient glowing backgrounds -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
      <div class="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply absolute top-[-10%] left-[-10%]"></div>
      <div class="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-emerald-100/30 rounded-full blur-[120px] mix-blend-multiply absolute bottom-[-10%] right-[-10%]"></div>
    </div>

    <div class="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
      <!-- Badge -->
      <div class="mb-8 inline-flex items-center gap-3 px-7 py-3 rounded-full border border-zinc-200 bg-white/60 backdrop-blur-sm text-xs font-semibold text-zinc-600 shadow-sm">
        <span class="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
        No Signup Required
      </div>

      <h1 class="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-zinc-900 leading-[1.05] max-w-4xl">
        Make a Note.<br>
        <span class="text-zinc-400">Segment it into Tasks.</span>
      </h1>
      
      <p class="mt-8 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed">
        TaskPlus is a lightning-fast, zero-friction workflow manager. Stop wasting time configuring and get straight to work, right in your browser.
      </p>

      <div class="mt-10">
        <RouterLink to="/forward" class="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold rounded-full text-white bg-zinc-900 hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-zinc-900/20 outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
          Start Managing
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
