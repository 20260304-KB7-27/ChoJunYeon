<template>
    <div>
        X : <input type="text" v-model.number="x">
        Y : <input type="text" v-model.number="y">
    </div>
    <button @click="calcAdd">계산</button>
    <div>결과 : {{ result }}</div>
</template>

<script>
import {ref ,reactive, toRefs } from 'vue';
export default {
    name: "Calc4",
    setup() {
        // 객체를 반응형으로 변환
        const state = reactive({x: 10, y:1});


        // computed : 의존하는 반응형 데이터가 변경될때만 자도응로 재계산
        // -> 결과가 캐싱
        // 읽기 전용
        const result = computed(() => {
            return state.x + state.y;
        })
        return {
            // toRefs : reactive 객체의 각 속성을 개별 ref로 반환 (반응성 유지)
            state,
            result,
        }
    }
}

</script>

<style scoped>

</style>