<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div class="container-fluid">
      <router-link
        to="/"
        class="navbar-brand">
        <img
          src="../assets/logo.png"
          alt="..."
          width="32"
          class="d-inline-block align-text-top">

        {{ title }}
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbar"
        :aria-expanded="show"
        aria-label="Toggle navigation"
        @click="show = !show">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ 'show': show }" id="navbar">
        <nav class="navbar-nav">
          <router-link
            to="/"
            active-class="active"
            class="nav-item nav-link">
            Home</router-link>
          <router-link
            to="/todo"
            active-class="active"
            class="nav-item nav-link">
            Todo</router-link>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script src="./navbar.js"></script>
