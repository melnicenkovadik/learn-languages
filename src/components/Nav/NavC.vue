<template>
  <nav :class="['nav', { 'nav--mobile': isMobile }]">
    <ul>
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/learn-words">Учить слова</router-link>
      </li>
      <li>
        <router-link to="/review-words">Повторение</router-link>
      </li>
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
