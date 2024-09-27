<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
    </header>

    <div>
      <h2>Counter</h2>
      <button @click="increment">Increment</button>
      <p>Count: {{ count }}</p>
    </div>

    <h2>Todo List</h2>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add a todo" />
      <button type="submit">Add</button>
    </form>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>

    <p v-if="todos.length === 0">No todos yet!</p>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api"; // Import the Composition API

export default {
  name: "App",
  setup() {
    const title = "Vue 2 Feature Showcase";
    const count = ref(0);
    function increment() {
      count.value++;
    }

    const newTodo = ref("");
    const todos = ref([]);

    function addTodo() {
      if (newTodo.value.trim()) {
        todos.value.push(newTodo.value);
        newTodo.value = "";
      }
    }

    return {
      title,
      count,
      increment,
      newTodo,
      todos,
      addTodo,
    };
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}

button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

form {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  margin: 5px 0;
}

input {
  padding: 5px;
  margin-right: 10px;
}

p {
  color: #ff5252;
}
</style>