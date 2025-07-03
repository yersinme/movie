<script setup lang="ts">

</script>

<template>
  <UiCard
    :id="1"
    title="Интерстеллар"
    year="2014"
    background-image="/images/test.png"
    :is-favorite="false"
    @toggle-favorite="handleToggleFavorite"
  />
</template>

<style scoped>

</style>