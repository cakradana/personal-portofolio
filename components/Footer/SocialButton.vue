<script setup lang="ts">
defineProps<{
  href: string;
  label: string;
}>();
</script>

<template>
  <div
    class="rounded-full bg-primary-300 p-1.5 text-primary-900 dark:bg-neutral-800 dark:text-primary-400 hover:bg-primary-400 dark:hover:bg-neutral-700">
    <a :href="href" :aria-label="label" class="block">
      <slot />
    </a>
  </div>
</template>
