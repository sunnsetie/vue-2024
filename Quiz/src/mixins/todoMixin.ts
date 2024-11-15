import { ref } from 'vue';

export const todoMixin = {
  data() {
    return {
      todos: ref<{ text: string; completed: boolean }[]>([]),
    };
  },
  methods: {
    addTodo(newTodo: string) {
      if (newTodo.trim()) {
        this.todos.value.push({ text: newTodo, completed: false });
      }
    },
    deleteTodo(index: number) {
      this.todos.value.splice(index, 1);
    },
    toggleTodoStatus(index: number) {
      this.todos.value[index].completed = !this.todos.value[index].completed;
    },
  },
};