<template>
  <div class="container">
    <h1 class="mb-5">Todo Page</h1>

    <div class="row">
      <div class="col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3">
        <TodoInputGroup
          :options="priorities"
          @selected-class-name="selectedClassName"
          v-model="todoItem"
          @todo-item="addTodoItem"/>

        <TodoFilterByPriority
          :options="[{
            option: 'All',
            value: 'all-priorities'
          }, ...priorities]"
          @filter-todo-items="filterTodoItems"
        />
        <TodoList :items="filteredTodoItems"/>
      </div>
    </div>
  </div>
</template>

<script src="./Todo.js"></script>
