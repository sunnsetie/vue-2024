<template>
  <div id="app">
    <nav>
      <router-link to="/">Explanation</router-link>
      <router-link to="/demo">Demonstration</router-link>
    </nav>
    <router-view :initialMessage="appMessage" /> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      appMessage: 'This message sent from App.vue'
    };
  }
}
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>
