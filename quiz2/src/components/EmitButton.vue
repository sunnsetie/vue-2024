<template>
    <button @click="emitEvent">Нажми меня</button>
  </template>
  
  <script>
  export default {
    name: 'EmitButton',
    methods: {
      emitEvent() {
        this.$emit('customEvent', 'Data, sent to parent');
      }
    }
  }
  </script>