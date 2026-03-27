<script setup>
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
import TodoListItem from './components/TodoListItem.vue';
import { ref, computed } from 'vue';
const posts = ref([
            {
              no: 1,
              title: 'Vue.js 기초 배우기',
              content:
                'Vue.js는 사용자 인터페이스를 구축하기 위한 프로그레시브 프레임워크입니다.',
            },
            {
              no: 2,
              title: '자바스크립트 ES6 문법',
              content:
                'ES6는 JavaScript의 최신 문법을 포함하며, let/const, 화살표 함수, 구조 분해 할당 등을 제공합니다.',
            },
            {
              no: 3,
              title: 'Node.js와 Express',
              content:
                'Node.js는 서버 측에서 JavaScript를 실행할 수 있도록 하는 런타임이며, Express는 이를 위한 경량 웹 프레임워크입니다.',
            },
            {
              no: 4,
              title: 'MongoDB 기본 개념',
              content:
                'MongoDB는 NoSQL 데이터베이스로 JSON과 유사한 문서 기반 데이터를 저장하고 관리할 수 있습니다.',
            },
            {
              no: 5,
              title: '프론트엔드와 백엔드의 차이',
              content:
                '프론트엔드는 사용자가 보는 부분을 개발하는 것이고, 백엔드는 서버와 데이터베이스를 관리하는 부분입니다.',
            },
            {
              no: 6,
              title: '비동기 프로그래밍',
              content:
                'JavaScript의 비동기 처리 방식에는 콜백, 프로미스, async/await가 있습니다.',
            },
            {
              no: 7,
              title: 'Vue Router 사용법',
              content:
                'Vue Router를 사용하면 Vue.js 애플리케이션에서 페이지 이동을 쉽게 처리할 수 있습니다.',
            },
            {
              no: 8,
              title: '컴포넌트 기반 개발',
              content:
                'Vue.js에서는 컴포넌트를 사용하여 UI를 작은 단위로 쪼개서 관리할 수 있습니다.',
            },
            {
              no: 9,
              title: 'CSS와 SCSS 차이점',
              content:
                'SCSS는 CSS의 확장된 버전으로 변수, 중첩, 믹스인 등을 지원합니다.',
            },
            {
              no: 10,
              title: 'Git과 GitHub 사용법',
              content:
                'Git은 버전 관리 시스템이며, GitHub는 이를 활용한 원격 저장소 플랫폼입니다.',
            },
          ]);

    const selectedPost = ref(null);
    // 아래에 화면처럼 동작하도록 구현해보세요
    const clickPost = (value) => {
      selectedPost.value = value;
    };

    const newNo = ref('');
    const addNo = ref('');
    const addTitle = ref('');
    const addContent = ref('');
    const newTitle = ref('');
    const newContent = ref('');

    const addPostHandler = () => {
      addNo.value = posts.value.length + 1;
      const post = {
        no: addNo.value,
        title: addTitle.value,
        content: addContent.value,
      };
      posts.value.push(post);
      addNo.value = '';
      addContent.value = '';
      addTitle.value = '';
    };

    const updatePost = ref(false);
    const clickUpdateHandler = (v) => {
      updatePost.value = true;
      newTitle.value = v.title;
      newContent.value = v.content;
    };
    const updatePostHandler = (v) => {
      const index = posts.value.findIndex((post) => post.no === v.no);
      if (index !== -1) {
        posts.value[index] = {
          no: v.no,
          title: newTitle.value,
          content: newContent.value,
        };
      }
      updatePost.value = false;
      selectedPost.value = posts.value[index];
      newContent.value = '';
      newTitle.value = '';

    };

    const sortPosts = computed(() => {
      return posts.value.slice().sort((a, b) => b.no - a.no);
    });

    const clickDeleteHandler = (v) => {
      const index = posts.value.findIndex((post) => post.no === v.no);
      if (index !== -1) {
        const isConfirmed = confirm('정말로 삭제하시겠습니까?');
        if (isConfirmed) {
          //posts.value.splice(index, 1);
          posts.value = posts.value.filter((post) => post.no != v.no);
        } else {
          alert('삭제가 취소되었습니다.');
        }
      }
    };

    //////////////////////////////////////////////////////////////////////

    const addPost = (todo) => {
      addNo.value = posts.value.length + 1;
      const post = {
        no: addNo.value,
        title: todo.value,
        content: todo.value,
      };
      posts.value.push(post);
      addNo.value = '';
    }

          
</script>

<template>
  <div id="app">
      <h1>📌 게시판 목록 v1</h1>

      <!-- 아래의 목록을 완성하세요 -->
      <InputTodo @addTodoHandler="addPost"></InputTodo>
      <input type="text" v-model="addTitle" />
      <input type="text" v-model="addContent" />
      <button @click="addPostHandler">저장</button>
      <ul>
        <li
          class="post-item"
          v-for="(value, key, index) in sortPosts"
          :key="value.no"
          @click="clickPost(value)"
          style="display: block"
        >
          <div style="display: flex">
            <h3>{{value.no}}. {{value.title}}</h3>
            <span>{{selectedPost?.no == value.no ? `▲` : `▼` }}</span>
          </div>
          <br />
          <div class="post-content" v-if="selectedPost?.no===value.no">
            <h2>{{selectedPost.title}}</h2>
            <p>{{selectedPost.content}}</p>
            <div style="text-align: right;">
              <button @click="clickUpdateHandler(value)">수정</button>
              <button @click="clickDeleteHandler(value)">삭제</button>
              <button id="close-contentBox" @click.stop="selectedPost=null">
                닫기
              </button>
            </div>
            <div v-if="updatePost==true">
              <hr />
              제목:
              <input type="text" v-model="newTitle" class="full-input" /><br />
              내용:
              <input
                type="text"
                v-model="newContent"
                class="full-input"
              /><br />
              <div style="text-align: right">
                <button @click.stop="updatePostHandler(value)">저장</button>
                <button @click.stop="updatePost=false">취소</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<style scoped></style>
