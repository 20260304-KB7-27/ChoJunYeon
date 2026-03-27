<template>
    <ul>
        <SongListItem v-for="s in songs" :key="s.id" :song="s"></SongListItem>
    </ul>
    <div>체크된 곡 수 : {{ doneCount }}</div>
</template>

<script setup>
import SongListItem from './SongListItem.vue';
import {inject} from 'vue';

const props = defineProps(['songs']);
</script>

<style scoped>

</style>