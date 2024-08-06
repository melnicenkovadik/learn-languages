<template>
  <div>
    <h2>LearnWordsPage</h2>
    <SelectC :options="categories" v-model="selectedCategory" />
    <div v-if="selectedWords">
      <h3>Words in Selected Category:</h3>
      <ul>
        <li v-for="word in selectedWords" :key="word.en">
          {{ word.en }} - {{ word.it }} - {{ word.ru }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import SelectC from '@/components/Select/SelectC.vue'; // измените путь в зависимости от расположения компонента
import categories from '@/common/categories.js';

const selectedCategory = ref('');

const selectedWords = computed(() => {
  const category = categories.find(cat => cat.value === selectedCategory.value);
  return category ? category.words : null;
});
</script>

<style>
/* Добавьте свои стили */
</style>
