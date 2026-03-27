<template>
    <div>
        <h2>비동기 컴포넌트</h2>

        <AsyncComponent></AsyncComponent>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import AsyncComponent from './components/AsyncComponent.vue';



// 옵션 없이 적용
const AsyncComp = defineAsyncComponent( () => import('./components/AsyncComponent.vue'));

/*\

// 옵션 적용
const AsyncComp = defineAsyncComponent( loader: () => import('./components/AsyncComponent.vue'),
loadingComponent: LoadingComp,
errorC)


</script>

<style scoped>

</style>