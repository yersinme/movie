<template>
  <section class="main-section">
    <AppHeader/>

    <div class="content">
      <h1 class="content-title">Insider</h1>
      <p class="content-text">2022 | Comedy horror | 1 Season</p>
      <div class="content-btns">
        <UiButton title="Watch now"/>
        <NuxtLink to="/favourites">
          <img src="/icons/favourite-heart.svg" alt="">
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
</script>

<style scoped lang="scss">
.main-section {
  position: relative;
  width: 100%;
  height: 455px;
  background-image: url('/images/main-banner.jpg');
  background-size: cover;
  padding: 32px 40px 53px;
  box-sizing: border-box;
}

.content {
  position: absolute;
  bottom: 23px;
  display: flex;
  flex-direction: column;
  gap: 20px
}

.content-title {
  color: #fff;
  font-size: 48px;
  font-weight: 600;
}

.content-text {
  color: #fff;
  font-size: 14px;
}

.content-btns {
  display: flex;
  align-items: center;
  gap: 16px;
}

img {
  margin-top: 5px;
  width: 24px;
  height: 24px;
  padding: 15px;
  background: var(--gray-gradient);
  border-radius: 14px;
}
</style>
