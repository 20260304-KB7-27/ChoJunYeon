<template>
  <div>
    <input type="text" v-model="title" />
    <input type="text" v-model="content" />
    <button @click="addTodoHandler">저장</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('');
const content = ref('');

const emit = defineEmits(['addPost']);

const addTodoHandler = () => {
  if (title.value.length >= 1 && content.value.length >= 1) {
    emit('addPost', { title: title.value, content: content.value });
    title.value = '';
    content.value = '';
  }
};
</script>

<style scoped></style>
