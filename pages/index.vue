<template>
  <SectionBase add-class="relative">
    <SectionContainer>
      <div class="grid lg:grid-cols-2 lg:gap-10 lg:items-center">
        <div class="xl:order-first">
          <a
            class="inline-block px-3.5 border rounded-full py-1 text-sm font-medium mb-5 border-primary-800 border-dashed dark:border-primary-300 bg-primary-600 text-primary-800 dark:text-primary-300 bg-opacity-10"
            href="mailto:rcakradana@gmail.com"
            >rcakradana@gmail.com</a
          >
          <Headline>
            <span>👋 Hi! </span>
            <span>I'm Cakra</span>
            <div class="w-max">
              <div
                class="text-3xl animate-typing overflow-hidden whitespace-nowrap border-r-4 dark:border-r-white border-r-neutral-950 pr-5 lg:pb-2 lg:text-5xl text-primary-600 dark:text-primary-500"
              >
                {{ currentJob }}
              </div>
            </div>
            <!-- <div class="block xl:hidden">
              <div class="text-primary-600 dark:text-primary-500">Frontend Developer</div>
            </div> -->
          </Headline>
          <p
            class="xl:text-lg mb-7 xl:w-9/12 text-neutral-600 dark:text-neutral-400"
          >
            I have over
            <span v-text="new Date().getFullYear() - 2021"></span> years of
            experience in Software Engineering, and I am eager to collaborate
            with you on your next project.
          </p>
          <ul class="grid gap-y-3 mb-10">
            <li class="flex gap-2 items-center">
              <span class="text-primary-800 dark:text-primary-300">✓</span>
              <span>Developing robust software solutions</span>
            </li>
            <li class="flex gap-2 items-center">
              <span class="text-primary-800 dark:text-primary-300">✓</span>
              <span>Intuitive and visually appealing frontend design</span>
            </li>
            <li class="flex gap-2 items-center">
              <span class="text-primary-800 dark:text-primary-300">✓</span>
              <span>Creating seamless and user-centric UI/UX experiences</span>
            </li>
          </ul>
          <div class="flex flex-col lg:flex-row gap-3">
            <ButtonPrimary to="/projects" label="See my work" />
            <ButtonPrimary to="/about" type="outline" label="About me" />
          </div>
        </div>
        <div class="hidden xl:block">
          <div
            class="mx-auto xl:w-96 mb-10 p-1 rounded-2xl bg-gradient-to-br shadow-lg xl:shadow-2xl from-primary-400 to-primary-900 dark:from-primary-300 dark:to-primary-800"
          >
            <div
              class="relative group bg-gradient-to-t text-center overflow-hidden from-neutral-300 to-neutral-200 dark:to-neutral-800 dark:from-neutral-900 rounded-xl pt-5"
            >
              <span
                class="bg-primary-900 dark:bg-primary-400 group-hover:scale-150 transition-all absolute animate-pulse rounded-full bottom-0 translate-y-1/2 blur-3xl left-0 w-full aspect-square"
              ></span>
              <img
                src="/assets/my-photo.png"
                class="inline-block w-64 xl:w-96 relative rounded-xl"
                loading="lazy"
                alt="Cakra"
              />
              <div
                class="absolute z-50 bg-neutral-100 flex place-items-center gap-5 shadow-lg p-2 rounded-xl top-2 right-2"
              >
                <div class="aspect-square w-8 h-8">
                  <span class="w-full text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  </SectionBase>
</template>

<script setup lang="ts">
import Headline from "~/components/Typo/Headline.vue";

useHead({
  title: "R. Cakradana A. Y.",
  meta: [
    {
      content:
        "Discover the work of a Software Engineer, Frontend Developer, and UI/UX Designer. Explore a portfolio that blends technology and design seamlessly.",
      name: "description",
    },
    {
      content:
        "Experience the portfolio of a Software Engineer, Frontend Developer, and UI/UX Designer, showcasing a harmonious blend of tech and design expertise.",
      name: "og:description",
    },
    {
      content: "R. Cakradana A. Y.",
      name: "author",
    },
    {
      content: "R. Cakradana A. Y.",
      name: "og:title",
    },
    {
      content: "https://rcakradana.me",
      name: "og:url",
    },
    {
      content: "https://rcakradana.me/assets/meta-image.jpeg",
      name: "og:image",
    },
  ],
});

const jobs = ["Software Engineer", "Frontend Developer", "UI/UX Designer"];

const currentJob = ref(jobs[0]);

let index = 0;

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % jobs.length;
    currentJob.value = jobs[index];
  }, 4000);
});
</script>

<style scoped>
</style>
