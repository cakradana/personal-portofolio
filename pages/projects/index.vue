<template>
  <SectionBase>
    <SectionContainer>
      <TypoHeadline>
        <span>Projects</span>
      </TypoHeadline>
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <CardItem v-for="project in projects" :image="'https://'+project.fields.image.fields.file.url+`?w=1080`"
                  :title="project.fields.title + ` — ` + project.fields.description"
                  :to="`/projects/${project.fields.slug}`" :key="`nk-${project.sys.id}`"/>
      </div>
    </SectionContainer>
  </SectionBase>
</template>
<script lang="ts">
export default {
  name: "index",
}
</script>

<script setup lang="ts">
import {getAllProjects} from "~/repositories/projectRepository";

const projects = await getAllProjects()

useHead({
  title: "Projects"
})
</script>