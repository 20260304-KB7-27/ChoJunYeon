<template>
    <h2>1. 전역 CSS</h2>
    <div class="box">Scoped CSS가 적용된 박스입니다.</div>
</template>

<script setup>

</script>

<style scoped>
/* 
Scoped속성
- 이 컴포넌트에만 슨타일을 적용
- Vue가 data-v-해시값속성을 생성하여 적용함
- 다른컴포넌트의 같은 클래스명과 충돌하지 ㅇ낳음
*/
.box {
    background-color: aqua;
    border: 2px solid blue;
}
</style>