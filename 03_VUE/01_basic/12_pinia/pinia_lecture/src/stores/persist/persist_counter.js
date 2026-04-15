import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/*
Pinia
- Vue3에서 사용하는 상태 관리 라이브러리
- 전역 상태(반응형 데이터들)를 관리 할 수 있다.

1. state -> 데이터
2. getters -> 계산된 값
3. actions -> 함수 (비즈니스로직) API 요청, state 변경하는 함수 등
*/

export const useCounterStore = defineStore('counter', () => {

  // state
  const like = ref(Number(sessionStorage.getItem('like-session') || 0));
  const doubleCount = computed(() => like.value * 2)

  // actions
  function increment() {
    like.value++;

    // LocalStorage
    // - 브라우저를 닫아도 데이터가 유지됨 (명시적으로 삭제 전까지 보관)
    

    /*
    sessionStorage
    - 현재 '탭'에서만 유지됨 ( 임시데이터, 일회성 상태 )
    */
    localStorage.setItem("local-count", like.value)
  }

  function reset() {
    count.value = 0; // 초기화

    //브라우저를 닫아도 데이터가 유지됨 (명시적으로 삭제 전까지 보관)
    localStorage.setItem('local-count', 0);
  }

  return { like, doubleCount, increment, reset }
})
