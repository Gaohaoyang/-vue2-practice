<script setup></script>

<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.4s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
