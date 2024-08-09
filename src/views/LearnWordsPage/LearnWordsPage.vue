// src/views/LearnWordsPage.vue
<template>
  <div class="learn-words-page">
    <div class="learn-words-page__header">
      <BackBtn :onClick="clearSelectedCategory" v-if="selectedCategory"/>
      <h2>
        {{
          selectedCategory
              ? `Категория: ${
                  categories.find(cat => cat.value === selectedCategory).label
              }`
              : 'Выберите категорию'
        }}
      </h2>
    </div>
    <ul v-if="categories.length && !selectedCategory">
      <li v-for="category in categories" :key="category.value">
        <Button
            variant="primary"
            size="large"
            @click="selectedCategory = category.value">
          {{ category.label }}
        </Button>
      </li>
    </ul>

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

const selectedCategory = ref('');

const selectedWords = computed(() => {
  const category = categories.find(cat => cat.value === selectedCategory.value);
  return category ? category.words : null;
});

const clearSelectedCategory = () => {
  selectedCategory.value = '';
};
</script>
