<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style scoped></style>
