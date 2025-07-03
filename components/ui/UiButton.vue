<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <button class="button">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
.button {
  color: var(--white);
  background-color: var(--primary);
  padding: 17px 24px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  transition: .1s;

  &:hover {
    transition: .1s;
    opacity: .8;
  }
}
</style>