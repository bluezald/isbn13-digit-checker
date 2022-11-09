<script setup>
import MainContent from "./components/MainContent.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <header>
    <div class="wrapper">
      <MainContent />
    </div>
  </header>
</template>

<style>
body {
  height: 100vh;
  background: #f5f5f5;
}
</style>
