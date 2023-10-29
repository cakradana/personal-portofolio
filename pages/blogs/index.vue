<template>
  <SectionBase>
    <SectionContainer>
      <TypoHeadline>
        <span>Blogs</span>
      </TypoHeadline>
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <CardItem
          v-for="blog in blogs"
          :image="
            'https://' + blog.fields.image.fields.file.url + `?w=1080&fm=webp`
          "
          :title="blog.fields.title"
          :category="blog.fields.blogCategory.fields.title"
          :createdAt="blog.sys.createdAt"
          :to="`/blogs/${blog.fields.slug}`"
          :key="`nk-${blog.sys.id}`"
        />
      </div>
    </SectionContainer>
  </SectionBase>
</template>
<script setup lang="ts">
import { getAllBlogs } from "~/repositories/blogRepository";

const blogs = await getAllBlogs();

useHead({
  title: "Blogs",
});
</script>