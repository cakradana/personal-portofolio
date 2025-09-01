<template>
  <SectionBase>
    <div class="absolute top-0 left-0 w-full h-72 lg:h-96 overflow-hidden">
      <nuxt-img
        :src="`https:` + talk.fields.image.fields.file.url + `?fm=webp`"
        :alt="talk.fields.image.fields.title"
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
          v-text="talk.fields.blogCategory.fields.title"
        ></span>
        <TypoHeadline>
          <span v-text="talk.fields.title"></span>
        </TypoHeadline>
        <p class="text-lg mb-7" v-text="talk.fields.description"></p>
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
              <span v-text="formatDate(talk.sys.createdAt)"></span>
              <span>•</span>
              <span>5 min watch</span>
            </div>
          </div>
        </div>
        <div
          class="prose dark:prose-invert max-w-none"
          v-html="talk.contentRendered"
        ></div>
      </div>
    </SectionContainer>
  </SectionBase>
</template>

<script setup lang="ts">
import { formatDate } from "~/utils/dateFormatter";
import { getSingle } from "~/repositories/talkRepository";
import { codeCopier } from "~/utils/codeCopier";

const route = useRoute();
const talk = await getSingle(route.params.slug);

if (typeof talk === "undefined" || !talk) {
  throw createError({
    statusCode: 404,
    statusMessage: "Talk not found",
  });
}

useSeoMeta({
  title: `R Cakradana | ${talk.fields.title}`,
  description: `${talk.fields.description}`,
  
  ogUrl: `https://rcakradana.id/talks/${talk.fields.slug}`,
  ogTitle: `R Cakradana | ${talk.fields.title}`,
  ogDescription: `${talk.fields.description}`,
  ogImage: `https:${talk.fields.image.fields.file.url}`,
  
  twitterTitle: `R Cakradana | ${talk.fields.title}`,
  twitterDescription: `${talk.fields.description}`,
  twitterImage: `https:${talk.fields.image.fields.file.url}`,
})

onMounted(() => {
  codeCopier();
});
</script>