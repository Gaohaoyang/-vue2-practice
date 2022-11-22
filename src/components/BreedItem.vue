<template>
  <router-link :to="`/dogPics/${name}`">
    <div class="wrap">
      <div class="item">{{ name }}</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
const BreedItem = Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
export default BreedItem
</script>

<style lang="css" scoped>
.wrap {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0a3464;
}
.item {
  width: 90%;
  height: 100%;
  display: flex;
  padding-left: 10%;
  align-items: center;
  font-size: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
</style>
