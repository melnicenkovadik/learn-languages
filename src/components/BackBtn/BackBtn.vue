<template>
  <div class="back-button" @click="handleClick">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import './BackBtn.scss';

// Определяем пропсы
const props = defineProps({
  onClick: {
    type: Function,
    required: true
  }
})

// Локальная функция для обработки клика
const handleClick = () => {
  props.onClick()
}
</script>
