<template>
    <div>
        <input type="text" v-model="todo" />
        <input type="text" v-model="addContent" />
        <button @click="addTodoHandler">저장</button>
    </div>
</template>

<script setup>
    const todo = {
        title : String, content : String,
    }
    const addTodoHandler = () => {
        if (todo.title.length >= 1 && todo.content.length >= 1) {
            $emit('addPost', todo);
            todo.title = '';
            todo.content = '';
        }
    }
</script>

<style scoped>

</style>