// src/views/LearnWordsPage.vue
<template>
  <div>
    <h2>LearnWordsPage</h2>
    <ul v-if="categories.length && !selectedCategory">
      <li v-for="category in categories" :key="category.value">
        <button @click="selectedCategory = category.value">{{ category.label }}</button>
      </li>
    </ul>
    <BackBtn @click="clearSelectedCategory" v-if="selectedCategory" />
    <div v-if="selectedWords">
      <WordDisplay :words="selectedWords" />
    </div>
  </div>
</template>

<script setup>
import BackBtn from '@/components/BackBtn/BackBtn.vue';
import WordDisplay from '@/components/WordDisplay/WordDisplay.vue';
import './LearnWordsPage.scss';

import categories from '@/common/categories.js';
import { ref, computed } from 'vue';

const selectedCategory = ref('');

const selectedWords = computed(() => {
  const category = categories.find(cat => cat.value === selectedCategory.value);
  return category ? category.words : null;
});

const clearSelectedCategory = () => {
  selectedCategory.value = '';
};
</script>
