<template>
  <div>
    <LoadingDots v-if="loading" />
    <ErrStatus v-if="showErr" />
    <BreedItem v-for="(value, name) in breeds" :key="name" :name="name" />
  </div>
</template>

<script lang="ts">
import ErrStatus from '@/components/ErrStatus.vue'
import LoadingDots from '@/components/LoadingDots.vue'
import BreedItem from '@/components/BreedItem.vue'
import axios from 'axios'
import Vue from 'vue'

const Component = Vue.extend({
  created() {
    console.log('created')
    this.getBreedList()
  },
  components: {
    ErrStatus,
    LoadingDots,
    BreedItem,
  },
  data: () => ({
    breeds: {} as Record<string, Array<string>>,
    showErr: false,
    loading: true,
  }),
  methods: {
    getBreedList() {
      axios
        .get('https://dog.ceo/api/breeds/list/all/random/50')
        .then((res) => {
          console.log(res.data)
          if (res.data.status === 'success') {
            console.log(res.data.message)
            this.breeds = res.data.message
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
export default Component
</script>

<style lang="css" scoped></style>
