<template>
  <PrimaryNavigation />

  <div class="container p-5">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrimaryNavigation from "@/components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    PrimaryNavigation,
  },
});
</script>

<style>
</style>
