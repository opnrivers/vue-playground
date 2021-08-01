<template>
  <div class="d-flex justify-content-between mb-4">
    <p><b>Filter by:</b></p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="filterPriority"
        id="filterPriority1"
      />

      <label class="form-check-label" for="filterPriority1">
        All
      </label>
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="filterPriority"
        id="filterPriority2"
      />

      <label class="form-check-label" for="filterPriority2">
        High
      </label>
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="filterPriority"
        id="filterPriority3"
      />

      <label class="form-check-label" for="filterPriority3">
        Medium
      </label>
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="filterPriority"
        id="filterPriority4"
      />

      <label class="form-check-label" for="filterPriority4">
        Low
      </label>
    </div>
  </div>
</template>

<script src="./TodoFilterByPriority.js"></script>
