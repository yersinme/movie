<script setup lang="ts">

import IconLink from "~/layouts/default/components/ui/IconLink.vue";
import {MENU_ITEMS} from "~/layouts/default/constants";
import Logo from "~/components/ui/Logo.vue";
</script>

<template>
  <div class="asideMenu">
    <Logo class="logo"/>
    <div class="linksGroup">
      <div v-for="group in MENU_ITEMS" class="linksItem">
        <icon-link v-for="item in group" :item="item"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  margin-bottom: 58px;
}

.asideMenu {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  height: 100vh;
  box-sizing: border-box;
  background-color: var(--dark);
  width: 274px;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.linksGroup {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.linksItem {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>