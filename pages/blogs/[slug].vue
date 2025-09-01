<template>
  <SectionBase>
    <div class="absolute top-0 left-0 w-full h-72 lg:h-96 overflow-hidden">
      <nuxt-img
        :src="`https:` + blog.fields.image.fields.file.url + `?fm=webp`"
        :alt="blog.fields.image.fields.title"
        class="w-full mb-5 opacity-30"
        loading="lazy"
      />
      <span
        class="w-full bg-gradient-to-t bottom-0 from-white dark:from-neutral-900 -top-24 absolute left-0"
      ></span>
    </div>
    <SectionContainer>
      <div class="lg:mx-auto lg:w-8/12">
        <span
          class="text-primary-600 font-medium"
          v-text="blog.fields.blogCategory.fields.title"
        ></span>
        <TypoHeadline>
          <span v-text="blog.fields.title"></span>
        </TypoHeadline>
        <p class="text-lg mb-7" v-text="blog.fields.description"></p>
        <div class="flex gap-3.5 mb-10 place-items-center">
          <div>
            <div
              class="aspect-square w-16 p-1 border-2 border-primary-600 h-16 rounded-full overflow-hidden"
            >
              <nuxt-img
                src="/img/my-photo.png"
                class="w-16 aspect-square rounded-full object-cover object-top" width="320" height="320"
              />
            </div>
          </div>
          <div>
            <div class="font-semibold text-xl">R. Cakradana</div>
            <div class="text-sm flex gap-3 dark:text-neutral-400">
              <span v-text="formatDate(blog.sys.createdAt)"></span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
        <div
          class="prose dark:prose-invert max-w-none"
          v-html="blog.contentRendered"
        ></div>
      </div>
    </SectionContainer>
  </SectionBase>
</template>

<script setup lang="ts">
import { formatDate } from "~/utils/dateFormatter";
import { getSingle } from "~/repositories/blogRepository";
import { codeCopier } from "~/utils/codeCopier";

const route = useRoute();
const blog = await getSingle(route.params.slug);

if (typeof blog === "undefined" || !blog) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
  });
}

useSeoMeta({
  title: `R Cakradana | ${blog.fields.title}`,
  description: `${blog.fields.description}`,
  
  ogUrl: `https://rcakradana.id/blogs/${blog.fields.slug}`,
  ogTitle: `R Cakradana | ${blog.fields.title}`,
  ogDescription: `${blog.fields.description}`,
  ogImage: `https:${blog.fields.image.fields.file.url}`,
  
  twitterTitle: `R Cakradana | ${blog.fields.title}`,
  twitterDescription: `${blog.fields.description}`,
  twitterImage: `https:${blog.fields.image.fields.file.url}`,
})

onMounted(() => {
  codeCopier();
});
</script>