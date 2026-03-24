<template>
    <ul>
        <TodoListItem v-for="todoitem in todolist" :key="todooitem.id" :todoitem="todoitem" @toggle="toggleCompleted" @delete="deleteTodo"></TodoListItem>
    </ul>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';
const props = defineProps({
    todolist: Array,
});
const emit = defineEmits(['toggel', 'delete']);
const toggleCompleted = (id) => {
    emit('toggle', id);
};

const deleteTodo = (id) => {
    emit('toggle', id);
};
</script>

<style lang="scss" scoped>

</style>