<template>
    <div class="slot-container">
      <slot></slot> 
    </div>
  </template>
  
  <script>
  export default {
    name: 'SlotComponent'
  }
  </script>
  
  <style scoped>
  .slot-container {
    border: 2px solid #42b983;
    padding: 10px;
    margin-bottom: 20px;
  }
  </style>
  