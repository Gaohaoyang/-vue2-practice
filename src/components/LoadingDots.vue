<template>
  <div class="wrap">
    Loading
    <span
      v-for="(item, index) in dots"
      :key="index"
      :style="{
        animationDelay: `${80 * index}ms`,
      }"
      class="point"
      >.</span
    >
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    dotsNum: 6,
  }),
  computed: {
    dots(): number[] {
      return new Array(this.dotsNum).fill(0)
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
@keyframes pointAnimation {
  0% {
    transform: translateY(0) translateZ(0);
  }

  30% {
    transform: translateY(-50%) translateZ(0);
  }

  60% {
    transform: translateY(0px) translateZ(0);
  }

  100% {
    transform: translateY(0px) translateZ(0);
  }
}

.point {
  margin-left: 3px;
  animation: pointAnimation 700ms ease-out 0s infinite;
  display: inline-block;
}
</style>
