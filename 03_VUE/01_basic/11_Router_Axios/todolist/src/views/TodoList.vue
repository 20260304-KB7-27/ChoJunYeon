<template>
  <h3>TodoList</h3>
  <div class="row">
    <div class="col p-3">
      <RouterLink class="btn btn-primary" to="/todos/add">
        할일 추가
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue';
import { inject } from 'vue';

const todoList = inject('todoList');
</script>

<style scoped></style>
