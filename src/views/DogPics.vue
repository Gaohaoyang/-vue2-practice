<template>
  <div class="container">
    <Navbar :title="$route.params.breed"></Navbar>
    <LoadingDots v-if="loading" />
    <ErrStatus v-if="showErr" />
    <Pic
      v-for="(pic, index) in pics"
      :pic="pic"
      :key="index"
      :style="{
        marginBottom: index === pics.length - 1 ? '80px' : '0',
      }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import ErrStatus from '@/components/ErrStatus.vue'
import LoadingDots from '@/components/LoadingDots.vue'
import Pic from '@/components/Pic.vue'
import Navbar from '../components/NavBar.vue'

export default Vue.extend({
  created() {
    this.getDogsPics()
  },
  components: {
    ErrStatus,
    LoadingDots,
    Pic,
    Navbar,
  },
  data: () => ({
    showErr: false,
    loading: true,
    pics: [] as Array<string>,
  }),
  methods: {
    getDogsPics() {
      axios
        .get(
          `https://dog.ceo/api/breed/${this.$route.params.breed}/images/random/10`
        )
        .then((res) => {
          console.log(res.data)
          if (res.data.status === 'success') {
            console.log(res.data.message)
            this.pics = res.data.message
            this.loading = false
          } else {
            console.log('error')
            this.handleError()
          }
        })
        .catch((err) => {
          console.log(err)
          this.handleError()
        })
    },
    handleError() {
      this.showErr = true
      this.loading = false
    },
  },
})
</script>

<style scoped>
.container {
  min-height: 100vh;
}
</style>
