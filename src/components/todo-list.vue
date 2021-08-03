<template>
  <div>
    <p v-if="!items.length">There are no items here.</p>
    <div v-for="(item, index) in items"
         :key="index"
         :class="item.className"
         class="card mb-2">

      <div class="card-body d-flex justify-content-between">
        {{ $filters.capitalize(item.value) }}
        <button
          type="button"
          class="btn-close"
          aria-label="Remove"
          @click="removeTodo(index)"></button>
      </div>
    </div>
  </div>
</template>

<script src="./todo-list.js"></script>
<style lang="scss" scoped src="./todo-list.scss"></style>
