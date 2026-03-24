<template>
  <div>
    <h2>App Component</h2>
    <hr>
    <ul>
      <li><CheckboxItem/></li>
      <li><CheckboxItem/></li>
      <li><CheckboxItem/></li>
      <li><CheckboxItem/></li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import CheckboxItem from './components/CheckboxItem.vue';
const checked = ref(false);
</script>

<style lang="scss" scoped>

</style>