<!-- src/components/WordDisplay.vue -->
<template>
  <div v-if="currentWord">
    <p>{{ currentWord.en }} - {{ currentWord.it }} - {{ currentWord.ru }}</p>
    <Button variant="primary" size="large" @click="markAsLearned">Выучил</Button>
  </div>
  <div v-else>
    <p>Вы выучили все слова!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue'
import './WordDisplay.scss';
import Button from '@/components/ui/Button.vue';
const props = defineProps({
  words: {
    type: Array,
    required: true
  }
});

const currentIndex = ref(0);
const learnedWords = JSON.parse(localStorage.getItem('learnedWords') || '[]');

const filteredWords = ref(props.words.filter(word =>
    !learnedWords.some(learnedWord => learnedWord.en === word.en)
));

// Отображаем текущее слово
const currentWord = ref(filteredWords.value[currentIndex.value] || null);
const markAsLearned = () => {
  if (currentWord.value) {
    // Проверяем, если слово уже существует в локалсторе
    const isAlreadyLearned = learnedWords.some(word => word.en === currentWord.value.en);

    if (!isAlreadyLearned) {
      learnedWords.push(currentWord.value);
      localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
    }

    currentIndex.value++;
    currentWord.value = filteredWords.value[currentIndex.value] || null;
  }
};
</script>
