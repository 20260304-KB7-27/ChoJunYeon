<template>
  <h1>App</h1>
  <Like></Like>
  <h2>좋아요 개수 : {{ like.like }}</h2>
  <h2>5배씩 불려서 좋아요보기 : {{ like.fivetime }}</h2>
  <h2>App에서 보는 Counter : {{ counter.count }}</h2>
</template>

<script setup>
import Counter from './components/Counter.vue';
import { useCounterStore } from './stores/counter';
import Like from './components/Like.vue';
// import { useLikeStore } from './stores/like';
import { useLikePersistStore } from './stores/persist/persist_like';

const counter = useCounterStore();
const like = useLikePersistStore();
</script>

<style scoped></style>
