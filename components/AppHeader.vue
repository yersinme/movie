<script setup lang="ts">
import {inject} from 'vue'
import {HEADER_LINKS} from '~/pages/index/constants'
import SearchBar from '~/components/SearchBar.vue'

const toggleAside = inject<() => void>('toggleAside')!
</script>

<template>
  <header class="header">
    <nav class="links">
      <nuxt-link
          v-for="l in HEADER_LINKS"
          :key="l.route"
          class="link"
          :to="l.route">
        {{ l.title }}
      </nuxt-link>
    </nav>

    <div class="buttons">
      <SearchBar class="search"/>
      <img src="/icons/bell.svg" alt="bell" class="icon"/>
      <span class="account">
        <img src="/images/avatar.jpg" alt="avatar" class="icon"/>
        <p>Tetiana</p>
      </span>
    </div>

    <div class="burger">
      <SearchBar class="search"/>

      <img src="/icons/burger.svg"
           alt="menu"
           @click="toggleAside"/>
    </div>
  </header>
</template>


<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.burger {
  display: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
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

  .account {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--white);
  }
}

@media (max-width: 768px) {
  .burger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .links,
  .buttons {
    display: none;
  }

}

</style>
