<template>
  <div class="relative">
    <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
    <input 
      ref="searchInput"
      type="text" 
      class="w-full pl-10 pr-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 text-md" 
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="onEnter($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    onEnter(value) {
      console.log(value, '');
      this.$emit('enter', value);
    }
  }
};
</script>

