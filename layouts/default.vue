<template>
  <VitePwaManifest />
  <SpeedInsights />
  <NuxtLoadingIndicator
    color="repeating-linear-gradient(to right, #d9b798 0%, #b06646 25%, #93523b 50%, #60392e 100%)"
  />
  <div class="bg-white dark:bg-neutral-900 dark:text-primary-50 min-h-screen">
    <div class="relative">
      <Sidebar />
      <main class="order-1 relative pb-20 lg:pb-0 lg:order-2 lg:ml-[6rem]">
        <Navbar />
        <slot />
        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';

useSeoMeta({
  title: 'R Cakradana',
  description: 'Discover the work of a Software Engineer, Frontend Developer, and UI/UX Designer',
  
  ogType: 'website',
  ogUrl: 'https://rcakradana.me',
  ogTitle: 'R Cakradana',
  ogDescription: 'Discover the work of a Software Engineer, Frontend Developer, and UI/UX Designer',
  ogImage: 'https://rcakradana.me/img/meta-image.jpeg',
  
  twitterCard: 'summary_large_image',
  twitterTitle: 'R Cakradana',
  twitterDescription: 'Discover the work of a Software Engineer, Frontend Developer, and UI/UX Designer',
  twitterImage: 'https://rcakradana.me/img/meta-image.jpeg',
})
</script>