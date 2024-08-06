<template>
  <select v-model="selected" @change="updateValue">
    <option v-for="category in props.options" :key="category.value" :value="category.value">
      {{ category.label }}
    </option>
  </select>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['input']);

const selected = ref('');

const updateValue = () => {
  emit('input', selected.value);
};
</script>

<style scoped>
/* Добавьте свои стили */
</style>
