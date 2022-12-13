<template>
  <div
    class="loading-wrap"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  >
    <div
      class="loading-wrap-big"
      :style="{
        width: size + 'px',
        height: size + 'px',
        // @ts-ignore
        webkitMaskImage: `-webkit-radial-gradient(${radialGradientValue})`,
        maskImage: `radial-gradient(${radialGradientValue})`,
      }"
    >
      <div
        class="inner-wrap"
        v-for="(item, index) in periodArr"
        :key="item"
        :style="{
          animationDelay: `${index * 0.1}s`,
          width: size / 2 + 'px',
          height: size / 2 + 'px',
        }"
      >
        <div
          class="inner"
          :style="{
            width: size / 2 + 'px',
            height: size / 2 + 'px',
          }"
        >
          <div
            class="circle"
            :style="{
              width: size + 'px',
              height: size + 'px',
            }"
          >
            <div
              class="skew"
              :style="{
                width: size + 'px',
                height: size + 'px',
                backgroundColor: bigCircleColor,
              }"
            ></div>
          </div>
        </div>
        <div
          v-if="index === 0"
          class="edge1 edge"
          :style="{
            width: lineWidth + 'px',
            height: lineWidth + 'px',
            backgroundColor: bigCircleColor,
          }"
        ></div>
        <div
          v-if="index === periodArr.length - 1"
          class="edge2 edge"
          :style="{
            width: lineWidth + 'px',
            height: lineWidth + 'px',
            backgroundColor: bigCircleColor,
          }"
        ></div>
      </div>
    </div>

    <div
      class="loading-wrap-small"
      :style="{
        width: smallCircleRadius * 2 + 'px',
        height: smallCircleRadius * 2 + 'px',
        // @ts-ignore
        webkitMaskImage: `-webkit-radial-gradient(${radialGradientValueSmall})`,
        maskImage: `radial-gradient(${radialGradientValueSmall})`,
      }"
    >
      <div
        class="inner-wrap"
        v-for="(item, index) in periodArr"
        :key="item"
        :style="{
          animationDelay: `${index * 0.1 + 0.5}s`,
          width: smallCircleRadius + 'px',
          height: smallCircleRadius + 'px',
        }"
      >
        <div
          class="inner"
          :style="{
            width: smallCircleRadius + 'px',
            height: smallCircleRadius + 'px',
          }"
        >
          <div
            class="circle"
            :style="{
              width: smallCircleRadius * 2 + 'px',
              height: smallCircleRadius * 2 + 'px',
            }"
          >
            <div
              class="skew"
              :style="{
                width: smallCircleRadius * 2 + 'px',
                height: smallCircleRadius * 2 + 'px',
                backgroundColor: smallCircleColor,
              }"
            ></div>
          </div>
        </div>
        <div
          v-if="index === 0"
          class="edge1 edge"
          :style="{
            width: lineWidth + 'px',
            height: lineWidth + 'px',
            backgroundColor: smallCircleColor,
          }"
        ></div>
        <div
          v-if="index === periodArr.length - 1"
          class="edge2small edge"
          :style="{
            width: lineWidth + 'px',
            height: lineWidth + 'px',
            backgroundColor: smallCircleColor,
          }"
        ></div>
      </div>
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
      bigCircleColor: '#4A63FF',
      smallCircleColor: '#FFC53A',
    }
  },
  computed: {
    scale(): number {
      return this.size / 526
    },
    lineWidth(): number {
      return this.scale * 67.5
    },
    gapWidth(): number {
      return this.scale * 8
    },
    smallCircleRadius(): number {
      return this.size / 2 - this.lineWidth - this.gapWidth
    },
    radialGradientValue(): string {
      const circle1 = this.size / 2
      const circle2 = circle1 - this.lineWidth
      return `
        transparent ${circle2}px,
        #000 ${circle2}px,
        #000 ${circle1}px,
        transparent ${circle1}px`
    },
    radialGradientValueSmall(): string {
      const circle1 = this.size / 2 - this.lineWidth - this.gapWidth
      const circle2 = circle1 - this.lineWidth
      return `
        transparent ${circle2}px,
        #000 ${circle2}px,
        #000 ${circle1}px,
        transparent ${circle1}px`
    },
  },
})
</script>

<style scoped>
.loading-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #f00; */
}

.loading-wrap-big {
  /* background-color: #bbb; */
  position: absolute;
  top: 0;
  left: 0;
  animation: loadingWrapAnim 1.4s linear infinite;
}

@keyframes loadingWrapAnim {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.inner-wrap {
  /* width: 48px;
  height: 48px; */
  position: absolute;
  right: 0;
  top: 0;
  animation: rotateAnim 1.8s ease-in-out infinite;
  transform-origin: left bottom;
}

.inner {
  /* width: 48px;
  height: 48px; */
  position: absolute;
  right: 0;
  top: 0;
  /* background-color: #4a63ff; */
  /* clip: rect(0 96px 50px 96px); */
  /* border-radius: 50%; */

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
  /* width: 96px;
  height: 96px; */
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
  background-color: red;
  /* width: 100px;
  height: 100px; */
}

.edge {
  border-radius: 50%;
  position: absolute;
  background-color: red;
}

.edge1 {
  right: 0;
  bottom: -14%;
  z-index: 1;
}

.edge2 {
  right: 27%;
  top: 24%;
  /* background-color: blue; */
}

.edge2small {
  right: 27%;
  top: 21%;
  /* background-color: red; */
}

.loading-wrap-small {
  /* background-color: #333; */
  animation: loadingWrapAnim 1.7s linear infinite;
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
