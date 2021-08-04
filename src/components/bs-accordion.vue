<template>
  <div class="accordion">
    <div v-for="(item, index) in items"
         :key="index"
         class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          :class="{ 'collapsed': index !== 0 }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse${index}`"
          aria-expanded="true"
          :aria-controls="`collapse${index}`">{{ item.heading }}
        </button>
      </h2>
      <div :id="`collapse${index}`"
           class="accordion-collapse collapse"
           :class="{ 'show': index === 0 }"
           :aria-labelledby="`heading${index}`"
           :data-bs-parent="`#${$attrs.id}`">
        <div class="accordion-body" v-html="item.content">
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./bs-accordion.js"></script>
