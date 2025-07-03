<script setup lang="ts">

import {HEADER_LINKS} from "~/pages/index/constants";
</script>

<template>
  <section>
    <header class="header">
      <div class="links">
        <nuxt-link class="link" v-for="link in HEADER_LINKS" :to="link.route">{{
            link.title
          }}
        </nuxt-link>
      </div>

      <div class="buttons">
        <img src="~/public/icons/search.svg" alt="search">
        <img src="~/public/icons/bell.svg" alt="bell">
        <img src="~/public/images/avatar.jpg" alt="avatar">
      </div>

    </header>

    <div class="content">
      <h1 class="content-title">Insider</h1>
      <p class="content-text">2022 | Comedy horror | 1 Season </p>
      <div>
        <UiButton title="Watch now" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  background-image: url("/images/main-banner.jpg");
  background-size: cover;
  height: 455px;
  padding: 32px 40px 53px;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
}

.links {
  display: flex;
  align-content: center;
  gap: 24px;
}

.link {
  color: var(--white);
}

.buttons {
  display: flex;
  gap: 24px;

  img {
    cursor: pointer;
  }
}

.content-title {
  color: var(--white);
  font-size: 48px;
  font-weight: 600;
}

.content-text {
    color: var(--white);
  font-size: 14px;
}
</style>