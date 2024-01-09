<template>
  <section-base override-class="pt-7 lg:pt-28 lg:pb-0" add-class="bg-neutral-800 dark:bg-neutral-950 text-white">
    <SectionContainer>
      <div class="mb-7 lg:mb-28">
        <div class="text-lg flex gap-1 mb-5">
          <h1 v-text="project.fields.title"></h1>
          <span>—</span>
        </div>
        <p class="font-display text-3xl lg:text-5xl" v-text="project.fields.description"></p>
      </div>
    </SectionContainer>
    <nuxt-img :src="`https:`+project.fields.image.fields.file.url" :alt="project.fields.image.fields.title"
              class="w-full mb-5" loading="lazy"/>
  </section-base>
  <SectionBase>
    <SectionContainer>
      <div class="grid lg:grid-cols-5 gap-10">
        <div class="lg:col-span-2">
          <div class="grid gap-7 lg:gap-10 lg:sticky lg:top-36">
            <div class="grid gap-3">
              <h3 class="font-bold font-display text-xl" v-text="project.fields.title"></h3>
              <p v-text="project.fields.projectDesc"></p>
              <div class="space-x-3">
                <NuxtLink
                    class="inline-block py-1 border-2 border-primary-800 text-primary-900 text-sm px-2.5 dark:text-white dark:border-neutral-400 rounded-full hover:bg-primary-200 dark:hover:bg-neutral-700"
                    :to="project.fields.webUrl">
                    Visit Website
                </NuxtLink>
                <NuxtLink
                    class="inline-block py-1 border-2 border-primary-800 text-primary-900 text-sm px-2.5 dark:text-white dark:border-neutral-400 rounded-full hover:bg-primary-200 dark:hover:bg-neutral-700"
                    :to="project.fields.repoUrl">
                    Repository
                </NuxtLink>
              </div>
            </div>
            <div class="grid gap-3">
              <h3 class="font-bold font-display text-xl">Headquarters</h3>
              <p v-text="project.fields.headquarters"></p>
            </div>
            <div class="grid gap-3">
              <h3 class="font-bold font-display text-xl">Industry</h3>
              <p v-text="project.fields.industry"></p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-3">
          <div class="prose dark:prose-invert max-w-none" v-html="project.contentRendered"></div>
        </div>
      </div>
    </SectionContainer>
  </SectionBase>
</template>

<script setup lang="ts">
import {getSingle} from "~/repositories/projectRepository";

const route = useRoute()
const project = await getSingle(route.params.slug)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}

console.log(project.fields.image.fields.file.url)

useSeoMeta({
  title: 'R Cakradana | '+project.fields.title+'',
  description: project.fields.description,
  
  ogUrl: 'https://rcakradana.me/projects/'+project.fields.slug+'',
  ogTitle: 'R Cakradana | '+project.fields.title+'',
  ogDescription: project.fields.description,
  ogImage: 'https:'+project.fields.image.fields.file.url+'',
  
  twitterTitle: 'R Cakradana | '+project.fields.title+'',
  twitterDescription: project.fields.description,
  twitterImage: 'https:'+project.fields.image.fields.file.url+'',
})
</script>