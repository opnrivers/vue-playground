<template>
  <select
    @input="$emit('update:modelValue', $event.target.value)"
    class="form-select">
    <option
      v-for="(item, index) in options"
      :key="index"
      :value="item[value]">{{ item[option] }}</option>
  </select>
</template>

<script src="./form-select.js"></script>
