<template>
    <ul>
        <SongListItem v-for></SongListItem>
    </ul>
</template>

<script setup>
const props = defineProps(['song']);

// inject('key') : 상위 컴포넌트에서 전달된 provide 수신
const icons = inject('icons');
</script>

<style lang="scss" scoped>

</style>