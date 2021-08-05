<template>
  <div class="container">
    <h1 class="mb-5">Bootstrap Components</h1>

    <bs-button type="button" class="btn-primary">
      Button Text
    </bs-button>

    <hr class="my-5"/>

    <bs-accordion id="bsAccordion" :items="[{
      heading: 'Heading 1',
      content: '<p>Content 1</p>'
    }, {
      heading: 'Heading 2',
      content: '<p>Content 2</p>'
    }, {
      heading: 'Heading 3',
      content: '<p>Content 3</p>'
    }]"></bs-accordion>

    <hr class="my-5"/>

    <bs-alert class="alert-warning alert-dismissible fade show">
      Alert Component
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"></button>
    </bs-alert>

    <hr class="my-5"/>

  </div>
</template>

<script src="./bs-components.js"></script>
