<script setup lang="ts">

import Container from "~/components/Section/Container.vue";
</script>

<template>
  <nav class="sticky lg:hidden top-0 z-50 py-3 border-b dark:border-neutral-800 bg-white dark:bg-neutral-900">
    <Container>
      <div class="relative flex gap-3 items-center">
        <div class="grow">
          <NuxtLink to="/" class="text-lg font-extrabold">
            <span>Cakradana</span>
          </NuxtLink>
        </div>
        <div class="flex items-center gap-2.5">
          <div>
            <NavbarColorToggle/>
          </div>
          <button type="button" class="">
            <nuxt-img src="/assets/me-reg.png" class="w-10 aspect-square rounded-full" width="320" height="320"/>
          </button>
        </div>
      </div>
    </Container>
  </nav>
</template>

<style scoped>

</style>
