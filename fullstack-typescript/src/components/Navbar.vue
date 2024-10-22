<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">TASKS API</router-link>
      <div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tasks/new">create tasks</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "PrimaryNavigation",
});
</script>