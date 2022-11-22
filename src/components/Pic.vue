<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="wrap">
    <img
      :src="pic"
      alt="dog"
      class="pic"
      :class="loaded ? 'shadow' : ''"
      @load="handleLoad"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const Pic = Vue.extend({
  props: {
    pic: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    loaded: false,
  }),
  methods: {
    handleLoad() {
      this.loaded = true
    },
  },
})
export default Pic
</script>

<style lang="css" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pic {
  width: 80%;
  min-height: 100px;
  margin-top: 30px;
  border-radius: 24px;
  transition: box-shadow 0.3s ease;
}
.shadow {
  box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.4);
}
</style>
