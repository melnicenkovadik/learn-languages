<template>
  <div id="app">
    <NavC/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import NavC from '@/components/Nav/NavC.vue';
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
</style>
