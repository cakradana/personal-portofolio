<script setup lang="ts">
const props = defineProps<{
	label: string,
	to: string,
	checkChild?: boolean
}>()

const isActive = computed(() => {
	const route = useRoute()
	return props.checkChild ? route.fullPath.includes(props.to) : props.to === route.fullPath
})
</script>

<template>
	<div class="relative group text-center py-2">
		<div :class="[
			'w-8/12 lg:w-7/12 mx-auto relative mb-0.5 flex overflow-hidden justify-center rounded-full py-1',
			(isActive ? 'text-primary-950' : '')
		]">
			<span :class="[
				(isActive ? 'scale-100 bg-primary-500' : 'scale-0 group-hover:scale-100 bg-neutral-200 dark:bg-neutral-700'),
				'h-full top-0 absolute w-full transition-all rounded-full'
			]"></span>
			<div class="relative">
				<slot v-if="isActive" name="icon-active" />
				<slot v-else name="icon-inactive" />
			</div>
		</div>
		<span :class="[
			'text-sm transition-all',
			(isActive ? 'font-medium' : '')
		]" v-text="label"></span>
		<nuxt-link :aria-label="label" :to="to" class="absolute inset-0" />
	</div>
</template>