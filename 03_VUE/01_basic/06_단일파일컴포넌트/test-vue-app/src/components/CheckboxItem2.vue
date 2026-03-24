<template>
    <input type="checkbox" :checked="idol.checked"> {{ idol.name }}
</template>

<!-- setup을 사용하지 않았을때 -->
<!-- <script>
import {ref} from "vue";

export default {
    name: "CheckboxItem",
    setup() {
        const checked = ref(false);
        return {
            checked,
        }
    }
}
</script> -->

<!-- setup 사용시 -->
<script setup>
// defineProps : 부모요소에서 전달받은 Props를 정의하는 함수

//유효성검사
defineProps({
    idol : {
        type: Object,
        required: true,

        // Vue 공식기능
        // 부모가 props를 전달할때마다 함수를 호출된다.
        //반환되는 값이 false면 콘솔에 경고를 출력해준다.
        validator: (value) => {
            return ((typeof value.id === "number" || typeof value.id === "string") &&
            typeof value.name === "string" &&
            typeof value.checked === "bloolean");
        }
    }
}
); //문자열과 숫자형 타입체크
</script>

<style lang="scss" scoped>

</style>