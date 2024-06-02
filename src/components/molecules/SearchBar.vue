<template>
  <div class="relative">
    <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
    <input ref="searchInput" type="text" 
      :value="modelValue"
      class="w-full pl-10 pr-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 text-md"
      :placeholder="placeholder" 
      @input="updateValue" 
      @keyup.enter="handleEnter" />
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    modelValue:{
      type: String,
      default: '',
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    handleEnter() {
      this.$emit('enter', this.modelValue);
    }
  }
};
</script>
