// src/views/LearnWordsPage.vue
<template>
  <div class="learn-words-page">
    <h2>Learn Words</h2>
    <ul v-if="categories.length && !selectedCategory">
      <li v-for="category in categories" :key="category.value">
        <CardC>
          <Button variant="primary" size="large" @click="selectedCategory = category.value">{{ category.label }}</Button>
        </CardC>
      </li>
    </ul>
    <BackBtn @click="clearSelectedCategory" v-if="selectedCategory"/>
    <div v-if="selectedWords">
      <WordDisplay :words="selectedWords"/>
    </div>
  </div>
</template>

<script setup>
import BackBtn from '@/components/BackBtn/BackBtn.vue';
import WordDisplay from '@/components/WordDisplay/WordDisplay.vue';
import Button from '@/components/ui/Button.vue';

import categories from '@/common/categories.js';
import {ref, computed} from 'vue';

import './LearnWordsPage.scss';
import CardC from "@/components/ui/Card.vue";

const selectedCategory = ref('');

const selectedWords = computed(() => {
  const category = categories.find(cat => cat.value === selectedCategory.value);
  return category ? category.words : null;
});

const clearSelectedCategory = () => {
  selectedCategory.value = '';
};
</script>
