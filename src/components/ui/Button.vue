<template>
  <button :class="buttonClasses" @click="onClick">
    <slot/>
  </button>
</template>

<script>
import '@/styles/components/_button.scss';

export default {
  name: 'ButtonC',
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    buttonClasses() {
      return [
        'btn',
        `btn--${this.variant}`,
        `btn--${this.size}`,
      ];
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
