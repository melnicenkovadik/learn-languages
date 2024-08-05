<template>
  <div>
    <h2>About</h2>
    <p>{{ message }}</p>

    <router-link to="/">Go to Home</router-link>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello, World!')

setTimeout(() => {
  message.value = 'Hello, Vue 3!'
}, 2000)
</script>

<style>
/* Добавьте свои стили */
</style>
