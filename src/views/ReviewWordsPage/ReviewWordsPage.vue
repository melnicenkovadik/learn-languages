<!-- src/views/ReviewWordsPage.vue -->
<template>
  <div>
    <h2>Review Learned Words</h2>
    <ul v-if="learnedWords.length">
      <li v-for="(word, index) in learnedWords" :key="word.en">
        {{ word.en }} - {{ word.it }} - {{ word.ru }}
        <button @click="removeWord(index)">Удалить</button>
      </li>
    </ul>
    <div v-else>
      <p>Вы ещё не выучили ни одного слова.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import './ReviewWordsPage.scss';

const learnedWords = ref(JSON.parse(localStorage.getItem('learnedWords') || '[]'));

const removeWord = (index) => {
  learnedWords.value.splice(index, 1); // Удаляем слово из локального массива
  localStorage.setItem('learnedWords', JSON.stringify(learnedWords.value)); // Обновляем localStorage
};
</script>
