<script setup lang="ts">
import type {IMenuItem} from "~/layouts/default/interfaces";
import {computed} from "vue";
import {useRoute} from "#app";

defineProps({
  item: {
    type: Object as PropType<IMenuItem>,
    required: true
  }
})
const route = useRoute();
</script>

<template>
  <NuxtLink :to="item.route" class="link" :class="{'link-active': route.path.includes(item.route)}">
    <img :src="`/icons/${item.icon}.svg`" alt="icon">
    <p>{{ item.title }}</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  gap: 12px;
  color: var(--gray);
  font-weight: 400;
  transition: .3s ease;
  padding: 12px;
  border-radius: 12px;

  &:hover {
    transition: .3s ease;
    background-color: var(--primary-30);
  }

  &-active {
  color: var(--white);
  }
}


</style>