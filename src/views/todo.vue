<template>
  <div class="container">
    <h1 class="mb-5">Todo Page</h1>

    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3">
        <form-input-group v-model="input" class="mb-4">
          <template v-slot:left>
            <form-select
              style="flex: 0.2 1 auto;"
              v-model="selected"
              :options="priorities"
              option="label"
              value="id"></form-select>
          </template>
          <template v-slot:right>
            <form-button
              @click="addItem"
              :disabled="!input.length"
              class="btn-outline-primary">Add</form-button>
          </template>
        </form-input-group>

        <div class="d-flex justify-content-between mb-4">

          <div
            v-for="(item, index) in [{
              label: 'All',
              id: 'all-priorities',
            }, ...priorities]"
            :key="index"
            class="form-check">

            <input
              v-model="picked"
              class="form-check-input"
              type="radio"
              name="filterByPriority"
              :id="item.id"
              :value="item.id"
              @click="filterItems(item.id)">

            <label class="form-check-label" :for="item.id">
              {{ item.label }}
            </label>
          </div>
        </div>

        <p v-if="!filtered.length">There are no todo items here.</p>

        <div
          v-for="(item, index) in filtered"
          :key="index"
          :class="item.priority"
          class="card mb-3">

          <div class="card-body d-flex justify-content-between">
            {{ $filters.capitalize(item.value) }}

            <button
              @click="removeItem(item, index)"
              type="button"
              class="btn-close"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./todo.js"></script>
<style lang="scss" scoped src="./todo.scss"></style>
