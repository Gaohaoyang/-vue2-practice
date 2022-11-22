<template>
  <div>
    <li>{{ todo.text }}</li>
  </div>
</template>

<script lang="ts">
export default {
  // name: 'LearnViewItem',
  props: ['todo'],
}
</script>

<style lang="css" scoped></style>
