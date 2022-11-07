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

.button.is-link {
  background-color: #db0000 !important;
}

button.is-link.is-light {
  background-color: #eff1fa !important;
  color: #db0000 !important;
}
</style>
