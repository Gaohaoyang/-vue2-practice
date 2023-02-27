<template>
  <div class="container">
    <Navbar title="Home"></Navbar>
    <div class="home-list">
      <router-link v-for="item in routerList" :to="item.link" :key="item.name">
        <div class="item">
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/NavBar.vue'

export default Vue.extend({
  data: () => ({
    routerList: [
      {
        link: '/CircleLoadingDemo',
        name: 'CircleLoadingDemo',
        img: '',
      },
      {
        link: '/dogsBreedList',
        name: 'dogsBreedList',
        img: '',
      },
    ],
  }),
  methods: {},
  computed: {},
  components: {
    Navbar,
  },
  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeDestroy() {},
  // destroyed() {},
})
</script>

<style scoped>
.container {
  min-height: 100vh;
}

.home-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
}

.home-list a {
  -webkit-tap-highlight-color: transparent;
}

.item {
  width: 40vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #333;
}
</style>
