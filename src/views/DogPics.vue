<template>
  <div>
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
import { mapActions } from 'pinia'
import { useNavbarName } from '../stores/navbarName'

export default Vue.extend({
  created() {
    this.changeTitle(`Pics of ${this.$route.params.breed}`)
    this.getDogsPics()
  },
  components: {
    ErrStatus,
    LoadingDots,
    Pic,
  },
  data: () => ({
    showErr: false,
    loading: true,
    pics: [] as Array<string>,
  }),
  methods: {
    ...mapActions(useNavbarName, ['changeTitle']), //映射action
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
  beforeRouteLeave(to, from, next) {
    if (to.name === 'dogsBreedList') {
      this.changeTitle('Dogs Breeds List')
    }
    next()
  },
})
</script>

<style scoped></style>
