<template>
  <div
    class="loading-wrap"
    :style="{
      width: size + 'px',
      height: size + 'px',
      // @ts-ignore
      webkitMaskImage: `-webkit-radial-gradient(transparent ${
        size / 2 - lineWidth
      }px, #000 ${size / 2 - lineWidth}px)`,
      maskImage: `radial-gradient(transparent ${size / 2 - lineWidth}px, #000 ${
        size / 2 - lineWidth
      }px)`,
    }"
  >
    <div
      class="inner"
      v-for="(item, index) in periodArr"
      :key="item"
      :style="{
        animationDelay: `${index * 0.1}s`,
      }"
    >
      <div class="circle">
        <div class="skew"></div>
      </div>
      <!-- <div
          class="edge1 edge"
          :style="{
            width: lineWidth + 'px',
            height: lineWidth + 'px',
          }"
        ></div> -->
      <div
        class="edge2 edge"
        :style="{
          width: lineWidth + 'px',
          height: lineWidth + 'px',
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    size: {
      type: Number,
      default: 96,
    },
  },
  data() {
    return {
      periodArr: [1, 2, 3, 4, 5, 6],
    }
  },
  computed: {
    lineWidth(): number {
      if (this.size) {
        return ((this.size as number) / 526) * 67.5
      }
      return 0
    },
  },
})
</script>

<style scoped>
.loading-wrap {
  /* background-color: #333; */
  border-radius: 50%;
  position: relative;
  /* border: 1px solid #f00; */
  animation: loadingWrapAnim 6s linear infinite;
}

@keyframes loadingWrapAnim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.inner {
  width: 48px;
  height: 48px;
  position: absolute;
  right: 0;
  top: 0;
  /* background-color: #4a63ff; */
  /* clip: rect(0 96px 50px 96px); */
  /* border-radius: 50%; */
  animation: rotateAnim 1.6s ease-in-out infinite forwards;
  transform-origin: left bottom;
  overflow: hidden;
}

@keyframes rotateAnim {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.circle {
  position: absolute;
  right: 0;
  top: 0;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  /* background: blue; */
  overflow: hidden;
}
.skew {
  transform: skewX(135deg);
  transform-origin: 0 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: red;
  width: 100px;
  height: 100px;
}

.edge {
  border-radius: 50%;
  position: absolute;
  right: 12px;
  /* bottom: 0; */
  top: 12px;
  background-color: red;
}

/* .inner::after {
  content: '';
  width: 100%;
  height: 100%;
  background: currentColor;
  position: absolute;
  clip: rect(0 48px 96px 0);
  transform: rotate(30deg);
  border-radius: 50%;
} */
</style>
