<template>
  <SectionBase>
    <SectionContainer>
      <TypoHeadline>
        <span>Talks</span>
      </TypoHeadline>
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <CardItem v-for="talk in talks" :image="'https:' + talk.fields.image.fields.file.url + `?w=1080&fm=webp`
          " :title="talk.fields.title" :category="talk.fields.blogCategory.fields.title"
          :createdAt="talk.sys.createdAt" :to="`/talks/${talk.fields.slug}`" :key="`nk-${talk.sys.id}`" />
      </div>
    </SectionContainer>
  </SectionBase>
</template>

<script setup lang="ts">
import { getAllTalks } from "~/repositories/talkRepository";

const talks = await getAllTalks();

useSeoMeta({
  title: 'R Cakradana | Talks',

  ogUrl: 'https://rcakradana.id/talks',
  ogTitle: 'R Cakradana | Talks',

  twitterTitle: 'R Cakradana | Talks',
})
</script>