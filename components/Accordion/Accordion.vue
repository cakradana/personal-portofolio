<script setup lang="ts">
import { ref, onMounted } from 'vue'

const accordionOpen = ref<boolean>(false)

const props = defineProps<{
  title: string
  id: string
  active?: boolean
}>()

onMounted(() => {
  accordionOpen.value = props.active
})
</script>

<template>
  <div class="py-2">
    <h5>
      <button
        :id="`accordion-title-${id}`"
        class="flex items-center justify-between w-full text-left font-medium py-2"
        @click.prevent="accordionOpen = !accordionOpen"
        :aria-expanded="accordionOpen"
        :aria-controls="`accordion-text-${id}`"
      >
        <span>{{ title }}</span>
        <svg class="fill-primary-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': accordionOpen }" />
            <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': accordionOpen }" />
        </svg>      
      </button>
    </h5>
    <div
      :id="`accordion-text-${id}`"
      role="region"
      :aria-labelledby="`accordion-title-${id}`"
      class="grid text-sm overflow-hidden transition-all duration-300 ease-in-out"    
      :class="accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
    >
      <div class="overflow-hidden">
        <slot />
      </div>
    </div>    
  </div>
</template>