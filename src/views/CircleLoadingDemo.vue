<template>
  <div class="wrap">
    <LoadingCircle />
    <div style="height: 80px"></div>
    <LoadingCircle size="200" />
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
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
