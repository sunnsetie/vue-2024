<template>
  <div id="app">
    <h1>Vue To-Do App</h1>

    <input
      v-model="newTodo"
      @keyup.enter="addTodo(newTodo)"
      placeholder="Add a new to-do"
    />

    <div class="filters">
      <button @click="filter = 'all'">All</button>
      <button @click="filter = 'completed'">Completed</button>
      <button @click="filter = 'incomplete'">Incomplete</button>
    </div>

    <transition-group name="list" tag="ul">
      <li
        v-for="(todo, index) in filteredTodos"
        :key="todo.text"
        v-bind:class="{ completed: todo.completed }"
      >
        <span
          @click="toggleTodoStatus(index)"
          class="todo-text"
        >
          {{ todo.text }}
        </span>
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import { todoMixin } from "./mixins/todoMixin";

export default {
  mixins: [todoMixin],
  setup() {
    const newTodo = ref<string>("");
    const filter = ref<string>("all");

    const filteredTodos = computed(() => {
      const todos = todoMixin.data().todos.value;
      switch (filter.value) {
        case "completed":
          return todos.filter((todo: any) => todo.completed);
        case "incomplete":
          return todos.filter((todo: any) => !todo.completed);
        default:
          return todos;
      }
    });

    watch(filteredTodos, async () => {
      await nextTick();
      console.log("Filtered To-Dos updated!");
    });

    function addTodo(newTodo: string) {
      const todos = todoMixin.data().todos.value;
      todos.push({ text: newTodo, completed: false });
      newTodo = "";
    }

    function deleteTodo(index: number) {
      const todos = todoMixin.data().todos.value;
      todos.splice(index, 1);
    }

    function toggleTodoStatus(index: number) {
      const todos = todoMixin.data().todos.value;
      const todo = todos[index];
      todo.completed = !todo.completed;
    }

    return { newTodo, filter, filteredTodos, addTodo, deleteTodo, toggleTodoStatus };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completed .todo-text {
  text-decoration: line-through;
}

.filters {
  margin: 20px 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
