<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      default: 'Hello World',
    },
  },
}
</script>

<style lang="css" scoped></style>
