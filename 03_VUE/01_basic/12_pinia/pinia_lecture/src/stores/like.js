import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLikeStore = defineStore('like', ()=> {
   
    //state
    const like = ref(0);

    //getter
    // 여러 컴포넌트에서 사용하는(공유되는) 계산 값
    const fivetime = computed(() => like.value * 5);

    /*
    sessionStorage
    - 현재 '탭'에서만 유지됨 ( 임시데이터, 일회성 상태 )
    */
    //actions
    const increment = () => {
        like.value++;
    }

    return {like, increment, fivetime};
});