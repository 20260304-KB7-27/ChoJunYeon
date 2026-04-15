<template>
  <div>
    <h2>{{ selectedPost.title }}</h2>
    <p>{{ selectedPost.content }}</p>
    <div style="text-align: right">
      <button @click="clickUpdateHandler(post)">수정</button>
      <button @click="deletePost(post)">삭제</button>
      <button id="close-contentBox" @click.stop="selectedPost = null">
        닫기
      </button>
    </div>
    <div v-if="updatedPost == true">
      <hr />
      제목:
      <input type="text" v-model="newTitle" class="full-input" /><br />
      내용:
      <input type="text" v-model="newContent" class="full-input" /><br />
      <div style="text-align: right">
        <button @click.stop="updatePost(post)">저장</button>
        <button @click.stop="updatedPost = false">취소</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const updatedPost = ref(false);
const newTitle = ref('');
const newContent = ref('');
const emit = defineEmits(['updatedData', 'deletedData']);

const props = defineProps({
  post: Object,
  selectedPost: Object,
  posts: Array,
});

const clickUpdateHandler = (v) => {
  updatedPost.value = true;
  newTitle.value = v.title;
  newContent.value = v.content;
};

const updatePost = (v) => {
  emit('updatedData', {
    no: v.no,
    title: newTitle.value,
    content: newContent.value,
  });
  updatedPost.value = false;
};

const deletePost = (v) => {
  emit('deletedData', v);
};
</script>

<style scoped></style>
