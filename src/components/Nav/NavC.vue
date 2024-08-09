<template>
  <nav :class="['nav', { 'nav--mobile': isMobile }]">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/learn-words">Learn</router-link></li>
      <li><router-link to="/review-words">Review</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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
