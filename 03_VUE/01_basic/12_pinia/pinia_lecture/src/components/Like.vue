<template>
  <button @click="increment">좋아요 누르기</button>
</template>

<script setup>
import { useLikeStore } from '@/stores/like';
const { increment } = useLikeStore();
</script>

<style scoped></style>
