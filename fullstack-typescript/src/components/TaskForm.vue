<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="saveTask()" class="card cardbody">
      <h1 class="text-center h3 mb-4">create Task</h1>

      <input
        type="text"
        placeholder="write a titile"
        v-model="task.title"
        class="form-control mb-3"
        autofocus
      />

      <textarea
        rows="3"
        placeholder="write a description"
        v-model="task.description"
        class="form-control mb-3"
      ></textarea>

      <button class="btn btn-primary"
        :disabled="!task.title || !task.description">Save</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskService";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      console.log(res);
      this.$router.push({ name: "tasks" });
    },
  },
});
</script>