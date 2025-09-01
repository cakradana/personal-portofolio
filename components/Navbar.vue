<script setup lang="ts">
</script>

<template>
  <nav class="sticky lg:hidden top-0 z-50 py-3 border-b dark:border-neutral-800 bg-white dark:bg-neutral-900">
    <SectionContainer>
      <div class="relative flex gap-3 items-center">
        <div class="grow">
          <NuxtLink to="/" class="text-lg font-extrabold">
            <span>rcakradana.id</span>
          </NuxtLink>
        </div>
        <div class="flex items-center gap-2.5">
          <div>
            <NavbarColorToggle/>
          </div>
          <button type="button" class="">
            <nuxt-img src="/img/my-photo.png" alt="me" class="w-10 aspect-square rounded-full object-top object-cover" width="320" height="320"/>
          </button>
        </div>
      </div>
    </SectionContainer>
  </nav>
</template>