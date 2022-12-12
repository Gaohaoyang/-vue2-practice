<template>
  <div>
    <div class="wrap">
      <h1>{{ navbarName }}</h1>
    </div>
    <div class="placeholder"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'pinia'
import { useNavbarName } from '../stores/navbarName'

const Navbar = Vue.extend({
  computed: {
    ...mapState(useNavbarName, ['navbarName']),
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
  height: 50px;
  background-color: #f5f5f5;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
h1 {
  font-size: 24px;
  font-weight: bold;
}
.placeholder {
  width: 100vw;
  height: 50px;
}
</style>
