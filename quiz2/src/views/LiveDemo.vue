<template>
    <div>
      <h1>Demonstration</h1>
      <p>{{ initialMessage }}</p>
  
      <button @click="startDemo">Start demonstration</button>
      <div class="log">
        <h2>Completing:</h2>
        <ul>
          <li v-for="(msg, index) in logMessages" :key="index">{{ msg }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LiveDemo',
    props: ['initialMessage'],
    data() {
      return {
        logMessages: []
      };
    },
    methods: {
      log(message) {
        this.logMessages.push(message);
      },
      startDemo() {
        this.logMessages = [];
        this.log("Synchronous task: Start execution");
  
        setTimeout(() => {
          this.log("Macrotask: Timer (setTimeout)");
        }, 0);
  
        Promise.resolve().then(() => {
          this.log("Microtask: Promise (Promise.then)");
        });
  
        this.log("Synchronous task: End of execution");
      }
    }
  }
  </script>