<script setup>
import axios from 'axios';

const url = 'http://localhost:3000/todos';

//axios.get()은 비동기함수이기 떄문에 결과를 바로 반환하지 않고 Promise 객체를 반환
//const response = axios.get(url);
//console.log('response', response);

const data = {
  todo: '윗몸일으키기',
  desc: '너무 빠르지 않게.......',
};

const requestAxios = async () => {
    const response = await axios.post(url, data);
    console.log('응답 데이터 : ', response);
}

const requestFetch = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log('fetch 응답 : ', data);
    });
};
</script>

<template>
  <div>
    <button @click="requestAxios">버튼</button>
    <button @click="requestFetch">버튼</button>
  </div>
</template>

<style scoped></style>
