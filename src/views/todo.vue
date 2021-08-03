<template>
  <div class="container">
    <h1 class="mb-5">Todo Page</h1>

    <div class="row">
      <div class="col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3">
        <todo-input-group
          :options="priorities"
          @selected-class-name="selectedClassName"
          v-model="todoItem"
          @todo-item="addTodoItem"/>

        <todo-filter-by-priority
          :options="[{
            option: 'All',
            value: 'all-priorities'
          }, ...priorities]"
          @filter-todo-items="filterTodoItems"
        />

        <todo-list :items="filteredTodoItems"/>
      </div>
    </div>
  </div>
</template>

<script src="./todo.js"></script>
