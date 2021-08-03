<template>
  <div class="d-flex justify-content-between mb-4">
    <p><b>Filter by:</b></p>

    <div class="form-check"
         v-for="(item, index) in options"
         :key="index">

      <input
        class="form-check-input"
        type="radio"
        name="filterPriority"
        :id="`filterPriority${index}`"
        @change="filterTodoItems(item.value)"
        :checked="index === 0"
      />

      <label class="form-check-label" :for="`filterPriority${index}`">
        {{ item.option }}
      </label>
    </div>
  </div>
</template>

<script src="./todo-filter-by-priority.js"></script>
