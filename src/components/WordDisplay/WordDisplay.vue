<!-- src/components/WordDisplay.vue -->
<template>
  <div class="word-display">
    <div v-if="currentWord && !isLoading">
      <transition name="fade" mode="out-in">
        <div key="currentWord.en">
          <p> 🇺🇸 {{ currentWord.en }}</p>
          <p> 🇮🇹 {{ currentWord.it }}</p>
          <p> 🇷🇺 {{ currentWord.ru }}</p>
        </div>
      </transition>
      <Button variant="primary" size="large" @click="handleMarkAsLearned">Выучил</Button>
    </div>
    <div v-else-if="!currentWord && !isLoading">
      <p>Вы выучили все слова!</p>
    </div>
    <div v-if="isLoading" class="loader">Загрузка...</div>
  </div>
</template>

<script setup>
import {ref, watchEffect} from 'vue';
import {defineProps} from 'vue';
import './WordDisplay.scss';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
  words: {
    type: Array,
    required: true
  }
});

const learnedWords = ref(JSON.parse(localStorage.getItem('learnedWords') || '[]'));
const filteredWords = ref([]);
const currentWord = ref(null);
const isLoading = ref(false);

const updateCurrentWord = () => {
  currentWord.value = filteredWords.value.length > 0 ? filteredWords.value[0] : null;
};

watchEffect(() => {
  filteredWords.value = props.words.filter(word =>
      !learnedWords.value.some(learnedWord => learnedWord.en === word.en)
  );
  updateCurrentWord();
});

const handleMarkAsLearned = () => {
  if (currentWord.value && !isLoading.value) {
    isLoading.value = true;
    setTimeout(() => {
      markAsLearned();
      isLoading.value = false;
    }, 1000); // Лоадер на 1 секунду
  }
};

const markAsLearned = () => {
  console.log('markAsLearned called');
  learnedWords.value.push(currentWord.value);
  localStorage.setItem('learnedWords', JSON.stringify(learnedWords.value));

  // Удаляем текущее слово из списка filteredWords
  filteredWords.value.shift();

  updateCurrentWord();
};
</script>

<style scoped>
.loader {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 20px;
}
</style>
