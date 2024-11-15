<template>
    <div>
      <h1>How the Event Loop Works in JavaScript</h1>
      <SlotComponent>
        <p>
          The Event Loop is a fundamental mechanism that allows JavaScript to perform asynchronous tasks 
          despite being single-threaded. It ensures that code is executed in the correct order by managing
          both synchronous and asynchronous tasks.  
        </p>
        <p>
          JavaScript executes synchronous tasks immediately, while asynchronous tasks (such as timers or 
          promises) are added to specific queues to be processed later.
        </p>
      </SlotComponent>
  
      <h2>Macro-tasks and Micro-tasks</h2>
      <ul>
        <li>
          <strong>Macro-tasks:</strong> setTimeout, setInterval, I/O operations, event handling.
        </li>
        <li>
          <strong>Micro-tasks:</strong> Promises (then/catch), async/await, mutation observers.
        </li>
      </ul>
      <p>
        Micro-tasks are always processed after the current macro-task, but before the next macro-task.
        This affects the order in which your code is executed and is crucial for understanding how 
        asynchronous behavior works in JavaScript.
      </p>
    </div>
  </template>
  
  <script>
  import SlotComponent from '../components/SlotComponent.vue';
  
  export default {
    name: 'Explanation',
    components: {
      SlotComponent
    }
  }
  </script>
  