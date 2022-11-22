<template>
  <div>
    <span
      v-for="(item, index) in dots"
      :key="item"
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
