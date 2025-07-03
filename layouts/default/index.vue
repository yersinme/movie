<script setup lang="ts">
import AsideMenu from "~/layouts/default/components/AsideMenu.vue";
</script>

<template>
  <main>
    <AsideMenu/>
    <div class="content">
    <NuxtPage/>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}
.content{
  margin-left: 274px;
}
</style>