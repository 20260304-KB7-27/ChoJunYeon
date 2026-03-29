<template>
  <div>
    <ul>
      <li
        class="post-item"
        v-for="(value, key, index) in sortPosts"
        :key="value.no"
        @click="clickPost(value)"
        style="display: block"
      >
        <div style="display: flex">
          <h3>{{ value.no }}. {{ value.title }}</h3>
          <span>{{ selectedPost?.no == value.no ? `▲` : `▼` }}</span>
        </div>
        <br />
        <div class="post-content" v-if="selectedPost?.no === value.no">
          <TodoListItem
            :post="value"
            :selectedPost="selectedPost"
            :posts="posts"
            @updatedData="(data) => $emit('passUpdatedPost', data)"
            @deletedData="(data) => $emit('deletePost', data)"
          ></TodoListItem>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TodoListItem from './TodoListItem.vue';

const emit = defineEmits(['passUpdatedPost', 'deletePost']);

const selectedPost = ref(null);

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const sortPosts = computed(() => {
  return props.posts.slice().sort((a, b) => b.no - a.no);
});

const clickPost = (value) => {
  selectedPost.value = value;
};
</script>

<style scoped></style>
