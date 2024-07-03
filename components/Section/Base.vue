<script setup lang="ts">
defineProps<{
	addClass?: string,
  overrideClass?: string
}>()
</script>

<template>
	<section :class="[
			(overrideClass ?? 'py-8 lg:py-16'),
			addClass
	]">
		<slot/>
	</section>
</template>