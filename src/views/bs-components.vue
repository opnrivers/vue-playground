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
  </div>
</template>

<script src="./bs-components.js"></script>
