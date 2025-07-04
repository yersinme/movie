<script setup lang="ts">
import {HEADER_LINKS} from '~/pages/index/constants'
import SearchBar from '~/components/SearchBar.vue'
</script>

<template>
  <header class="header">
    <div class="links">
      <nuxt-link
          v-for="l in HEADER_LINKS"
          :key="l.route"
          class="link"
          :to="l.route"
      >
        {{ l.title }}
      </nuxt-link>
    </div>

    <div class="buttons">
      <SearchBar/>
      <img src="~/public/icons/bell.svg" alt="bell" class="icon"/>
      <span class="account"><img src="~/public/images/avatar.jpg" alt="avatar"
                 class="icon"/> <p>Tetiana</p></span>

    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}

.links {
  display: flex;
  gap: 24px;
}

.link {
  color: var(--white);
}

.buttons {
  display: flex;
  align-items: center;
  gap: 24px;

  .icon {
    cursor: pointer;
    border-radius: 50%;
  }

  .account  {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--white);
  }
}
</style>
