<script setup>
import NoSlotTest from './components/example1/NoSlotTest.vue';
import SlotTest from './components/example1/SlotTest.vue';
import BaseCard from './components/example2/BaseCard.vue';

NoSlotTest;
</script>

<template>
  <div>
    <BaseCard>
      <template #header>
        공지사항
      </template>

      <!-- #default : template 없이 작성해도 기본 슬롯으로 들어감 -->
       <p>3월 25일 이전에 풀던 example 컴포넌트로 분리해서 만드는거 완성하세요</p>
       <p><strong>이름: </strong>홍길동</p>
      <p><strong>직무: </strong>프론트개발자</p>
      <p><strong>경력: </strong>3년</p>
      <template #footer>
        <button>취소</button>
        <button>저장</button>
      </template>
    </BaseCard>
  </div>>
</template>

<style scoped>

.card-ros{
  display: flex;
  gap: 20px;
}
</style>
