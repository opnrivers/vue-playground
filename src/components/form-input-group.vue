<template>
  <div class="input-group">
    <slot name="left"></slot>
    <input :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           type="text"
           class="form-control">
    <slot name="right"></slot>
  </div>
</template>

<script src="./form-input-group.js"></script>
