<template>
  <div>circle loading</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'pinia'
import { useNavbarName } from '../stores/navbarName'

export default Vue.extend({
  created() {
    this.changeTitle('Circle loading demo')
  },
  methods: {
    ...mapActions(useNavbarName, ['changeTitle']),
  },
})
</script>

<style scoped></style>
