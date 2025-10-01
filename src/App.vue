<script setup>
import Hero from './components/Hero.vue'
import HomeCards from './components/HomeCards.vue';
import JobListings from './components/JobListings.vue';
import NavBar from './components/NavBar.vue'
</script>

<template>
    <NavBar />
    <Hero title="Test title" subtitle="Test subtitle" />
    <HomeCards />
    <JobListings />
</template>

<!-- scoped // los estilos solo se aplican en el componente actual -->
<style scoped></style>
