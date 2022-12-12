<template>
  <div class="wrap">
    <LoadingCircle />
    <!-- <div class="loading"></div> -->
    <!-- <div class="test">test</div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'pinia'
import { useNavbarName } from '../stores/navbarName'
import LoadingCircle from '@/components/LoadingCircle.vue'

export default Vue.extend({
  created() {
    this.changeTitle('Circle loading demo')
  },
  methods: {
    ...mapActions(useNavbarName, ['changeTitle']),
  },
  components: {
    LoadingCircle,
  },
})
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 400px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  width: 188px;
  height: 188px;
  background-color: #333;
  border-radius: 50%;
  -webkit-mask: -webkit-radial-gradient(transparent 60px, #000 60px);
  mask: radial-gradient(transparent 20px, #000 20px);
  /* animation: spin 1s linear infinite; */
}

.test {
  width: 188px;
  height: 188px;
  border-radius: 50%;
  background-image: radial-gradient(transparent, transparent 20px, #000 20px);
}

/* .loader,
.loader:before,
.loader:after {
  border-radius: 50%;
}
.loader {
  color: #333;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before,
.loader:after {
  position: absolute;
  content: '';
}
.loader:before {
  width: 5.2em;
  height: 10.2em;
  background: #f5f5f5;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  -webkit-transform-origin: 5.1em 5.1em;
  transform-origin: 5.1em 5.1em;
  -webkit-animation: load2 2s infinite ease 1.5s;
  animation: load2 2s infinite ease 1.5s;
}
.loader:after {
  width: 5.2em;
  height: 10.2em;
  background: #f5f5f5;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 4.9em;
  -webkit-transform-origin: 0.1em 5.1em;
  transform-origin: 0.1em 5.1em;
  -webkit-animation: load2 2s infinite ease;
  animation: load2 2s infinite ease;
}
@-webkit-keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
} */
</style>
