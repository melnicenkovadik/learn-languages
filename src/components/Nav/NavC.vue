<template>
  <nav :class="['nav', { 'nav--mobile': isMobile }]">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <!-- Add more links as needed -->
    </ul>
  </nav>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import './nav.scss';

const isMobile = ref(false);

const checkViewport = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkViewport();
  window.addEventListener('resize', checkViewport);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkViewport);
});
</script>
