<template>
    <div>
        X : <input type="text" v-model.number="x">
        Y : <input type="text" v-model.number="y">
    </div>
    <button @click="calcAdd">계산</button>
    <div>결과 : {{ result }}</div>
</template>

<!-- 
<script setup> :
- 간결한 컴포넌트를 작성하기 위한 문법
- 보일러플레이트 코드 감소
- 변수/함수를 템플릿에서 바로 사용 가능
-->

<script setup>
import {ref ,reactive, toRefs } from 'vue';

const x = ref(10);
// 객체를 반응형으로 변환
const result = ref(20);

watch(x, (current, old) => {
    console.log(`${old} -> ${current}`);

    // computed : 계산 결과를 반환하는 파생값 -> 템플릿 표시용
    // API 호출, 로깅, 감시대상이 아닌 다른 상태값을 변경하고 싶을때
    result.value = x.value * 2;
})
        


</script>

<style scoped>

</style>