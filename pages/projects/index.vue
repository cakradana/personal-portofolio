<template>
  <SectionBase>
    <SectionContainer>
      <TypoHeadline>
        <span>Projects</span>
      </TypoHeadline>
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <CardItem v-for="project in projects" :image="'https:'+project.fields.image.fields.file.url+`?w=1080`"
                  :title="project.fields.title + ` — ` + project.fields.description"
                  :to="`/projects/${project.fields.slug}`" :key="`nk-${project.sys.id}`"/>
      </div>
    </SectionContainer>
  </SectionBase>
</template>

<script setup lang="ts">
import {getAllProjects} from "~/repositories/projectRepository";

useSeoMeta({
  title: 'R Cakradana | Projects',
  
  ogUrl: 'https://rcakradana.me/projects',
  ogTitle: 'R Cakradana | Projects',
  
  twitterTitle: 'R Cakradana | Projects',
})

const projects = await getAllProjects()

</script>