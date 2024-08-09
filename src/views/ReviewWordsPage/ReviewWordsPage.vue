<!-- src/views/ReviewWordsPage.vue -->
<template>
  <div class="review-words-page">
    <h2>Мои выученые слова</h2>
    <ul v-if="learnedWords.length">
      <li v-for="(word) in learnedWords" :key="word.en">
        <p> 🇺🇸 {{ word.en }}</p>
        <p> 🇮🇹 {{ word.it }}</p>
        <p> 🇷🇺 {{ word.ru }}</p>
        <Button variant="secondary" size="medium" @click="removeWord(word.en)">Удалить</Button>
      </li>
    </ul>
    <div v-else>
      <p>Вы ещё не выучили ни одного слова.</p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Button from '@/components/ui/Button.vue';
import './ReviewWordsPage.scss';

const learnedWords = ref(JSON.parse(localStorage.getItem('learnedWords') || '[]'));

const removeWord = (wordEn) => {
  // Находим индекс слова по ключу 'en'
  const index = learnedWords.value.findIndex(word => word.en === wordEn);

  if (index !== -1) {
    learnedWords.value.splice(index, 1); // Удаляем слово из локального массива
    localStorage.setItem('learnedWords', JSON.stringify(learnedWords.value)); // Обновляем localStorage
  }
};
</script>
