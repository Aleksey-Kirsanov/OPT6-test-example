<script setup>
import MainPage from "./components/MainPage.vue";
</script>

<template>
  <div class="container">
    <div class="rectangle-decore"></div>
    <MainPage />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 229px 1fr;
  grid-gap: 0;
}
.rectangle-decore {
  min-height: 100vh;
  height: 100%;

  background: radial-gradient(circle at 29% 0, #000, #1c2734 103%);
}
</style>
