<script setup>
  import BaseInput from './components/BaseInput.vue';
  import { ref } from 'vue';

  // 입력받을 반응형데이터
  const modelValue = ref('');
</script>

<template>
  <h1>v-model 테스트!</h1>
  <hr></hr>
  <BaseInput
  v-model="modelValue"
  label="닉네임"
  placeholder="placeholder"
  ></BaseInput>

  <p>
    닉네임: <strong>{{ modelValue }}</strong>
  </p>
</template>

<style scoped></style>
