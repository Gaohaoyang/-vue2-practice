<template>
  <div>
    <div class="safe-area"></div>
    <div class="wrap" @click="handleBack">
      <div class="back"><</div>
      <h1>{{ title }}</h1>
    </div>
    <div class="placeholder"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const Navbar = Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleBack() {
      this.$router.go(-1)
    },
  },
})
export default Navbar
</script>

<style lang="css" scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 44px;
  background-color: #f5f5f5;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.back {
  width: 44px;
  height: 44px;
  position: absolute;
  top: 0;
  left: 4px;
  /* background-color: #444; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.safe-area {
  height: calc(constant(safe-area-inset-top));
  height: calc(env(safe-area-inset-top));
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

.placeholder {
  width: 100vw;
  height: 44px;
}
</style>
