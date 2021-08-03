<template>
  <div class="input-group mb-4">
    <select
      class="form-select"
      style="flex: 0.3 1 auto;"
      aria-label="Select Priority"
      v-model="className"
      @change="selectedClassName">

      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :selected="className === option.value">{{ option.option }}
      </option>
    </select>

    <input
      type="text"
      class="form-control"
      v-model="todoItem"
      @input="$emit('update:modelValue', $event.target.value)">

    <button
      class="btn btn-outline-primary"
      type="button"
      @click="addTodoItem(todoItem)"
      :disabled="!todoItem">Add</button>
  </div>
</template>

<script src="./TodoInputGroup.js"></script>
