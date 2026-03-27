<script setup>
import {ref, provide} from 'vue';
import SongList from './components/SongList.vue';

const songs = ref([
  { id: 1, title: "Blueming", done: true },
  { id: 2, title: "Dynamite", done: true },
  { id: 3, title: "Lovesick Girls", done: false },
  { id: 4, title: "마리아(Maria)", done: false },
]);

// songs 추가
const addSong = () => {
  songs.value.push({
    id: 5,
    title: '새로운 노래',
    done: true,
  })
}

// Provide
// - provide('키', 데이터) : 정적값
// - provide('키', computed()) : 반응형을 유지한 데이터
provide("icons", {
  checked: "far fa-check-circle",
  unchecked: "far fa-circle"
})

</script>

<template>
  <!-- songs를 props로 전달?? -->
  <SongList :songs="songs"></SongList>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
