<script setup lang="ts">
import { ref, provide } from 'vue'
import AsideMenu from '~/layouts/default/components/AsideMenu.vue'

const isAsideOpen = ref(false)
provide('toggleAside', () => (isAsideOpen.value = !isAsideOpen.value))
</script>

<template>
  <main :class="{ open: isAsideOpen }">
    <AsideMenu class="aside" />
    <div class="content">
      <NuxtPage />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;

  .content {
    margin-left: 274px;
    flex: 1;
  }
}

@media (max-width: 768px) {
  main {
    .content {
      margin-left: 0;
      flex: 1;
    }

    .aside {
      position: fixed;
      inset: 0 auto 0 0;
      width: 274px;
      transform: translateX(-100%);
      transition: transform .3s;
      z-index: 20;
    }

    &.open .aside {
      transform: translateX(0);
    }
  }
}
</style>
