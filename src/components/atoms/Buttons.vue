Buttons.vue

<template>
  <button :class="buttonClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClass() {
      return {
        'px-3 py-0.5 rounded-full': true,
        'bg-black text-white hover:bg-gray-800': this.variant === 'primary',
        'bg-white text-black border border-black hover:bg-gray-100': this.variant === 'secondary',
        'bg-white text-black': this.variant === 'default'
      };
    }
  }
};
</script>
