<template>
  <div>
    hi
    <vue-pdf-embed
      source="https://www.africau.edu/images/default/sample.pdf"
    ></vue-pdf-embed>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
import { mapActions } from 'pinia'
import { useNavbarName } from '../stores/navbarName'

export default Vue.extend({
  created() {
    this.changeTitle('PDF View Demo')
  },
  methods: {
    ...mapActions(useNavbarName, ['changeTitle']),
  },
  components: {
    VuePdfEmbed,
  },
})
</script>

<style scoped></style>
