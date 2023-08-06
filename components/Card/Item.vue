<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  to: string;
  category?: string | null;
  createdAt?: string | null;
}>();
</script>

<template>
  <div
    :class="[
      'bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-all hover:bg-primary-200 cursor-pointer overflow-hidden relative group rounded-2xl',
    ]"
  >
    <div class="aspect-video rounded-2xl overflow-hidden">
      <nuxt-img :src="image" :alt="title" />
    </div>
    <div class="px-5 py-4 space-y-2">
      <div
        v-if="category && createdAt"
        class="flex items-center gap-3 font-medium"
      >
        <span
          class="px-2 py-1 text-xs bg-primary-300 p-1.5 text-primary-900 dark:bg-neutral-900 dark:text-primary-400 w-max rounded-lg"
        >
          {{ category }}
        </span>
        <span class="text-neutral-600 dark:text-neutral-400 text-sm">•</span>
        <span
          class="text-neutral-600 dark:text-neutral-400 text-sm"
          v-text="formatDate(createdAt)"
        ></span>
      </div>
      <h2 class="font-bold" v-text="title"></h2>
    </div>
    <nuxt-link :to="to" class="absolute inset-0"></nuxt-link>
  </div>
</template>

<style scoped>
</style>
