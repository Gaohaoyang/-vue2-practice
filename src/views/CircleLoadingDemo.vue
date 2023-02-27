<template>
  <div class="wrap">
    <div style="height: 80px"></div>
    <LoadingCircle :size="60" />
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
