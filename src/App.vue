<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component
  export default class App extends Vue {
    msg = 'Welcome to Vue.js!';

    async created() {
      const module = await import('./math');
      const Math = module.default;
      this.msg = `4 * 4 = ${Math.square(4)}`;
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;

    h1 {
      color: green;
    }
  }
</style>
