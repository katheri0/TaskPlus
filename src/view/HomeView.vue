<script setup>
import { RouterLink } from 'vue-router';
import Header from '../components/Sections/Header.vue';
import Features from '../components/Sections/Features.vue';
import developer from '@/components/Sections/developer.vue';
import Footer from '@/components/Sections/Footer.vue';
import AboutUs from '@/components/Sections/AboutUs.vue';
import Home from '@/components/Sections/Home.vue';
</script>

<template>
    <Header />
    <Home />
    <br>

    <Features />
    <br>
    <br>
    <AboutUs />
    <br>
    <developer />
    <br>
    <Footer />
</template>


<style scoped>
.home-page{

  min-height: 100vh;
  background-color: var(--primary-color);
}

</style>
