<template>
  <SectionBase add-class="relative">
    <SectionContainer>
      <div class="grid lg:grid-cols-2 lg:gap-10">
        <div class="lg:order-first">
          <a
            class="inline-block px-3.5 border rounded-full py-1 text-sm font-medium mb-5 border-primary-800 border-dashed dark:border-primary-300 bg-primary-600 text-primary-800 dark:text-primary-300 bg-opacity-10"
            href="mailto:rcakradana@gmail.com"
            >rcakradana@gmail.com</a
          >
          <TypoHeadline>
            <p class="inline"><span class="inline-block animate-wave transform origin-[70%_70%]">👋</span> Hi! </p>
            <p class="inline">I'm Cakra</p>
            <div class="w-max mb-5">
              <div
                class="text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl sm:pb-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 dark:border-r-white border-r-neutral-950 pr-5 text-primary-600 dark:text-primary-500"
              >
                {{ currentJob }}
              </div>
            </div>
          </TypoHeadline>
          <p
            class="lg:text-lg mb-5 lg:w-9/12 text-neutral-600 dark:text-neutral-400"
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
        <div class="hidden lg:block">
          <div
            class="mx-auto lg:w-96 mb-5 p-1 rounded-2xl bg-gradient-to-br shadow-lg lg:shadow-2xl from-primary-400 to-primary-900 dark:from-primary-300 dark:to-primary-800"
          >
            <div
              class="relative group bg-gradient-to-t text-center overflow-hidden from-neutral-300 to-neutral-200 dark:to-neutral-800 dark:from-neutral-900 rounded-xl pt-5"
            >
              <span
                class="bg-primary-900 dark:bg-primary-400 group-hover:scale-150 transition-all absolute animate-pulse rounded-full bottom-0 translate-y-1/2 blur-3xl left-0 w-full aspect-square"
              ></span>
              <img
                src="/assets/my-photo.png"
                class="inline-block w-64 lg:w-96 relative rounded-xl"
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
useHead({
  title: "Cakra's Portfolio",
  meta: [
    {
      content: "Cakra's Portfolio",
      name: "title",
      property: "og:title",
    },
    {
      content: "website",
      name: "type",
      property: "og:type",
    },
    {
      content: "https://rcakradana.me/assets/meta-image.jpeg",
      name: "image",
      property: "og:image",
    },
    {
      content: "https://rcakradana.me",
      name: "url",
      property: "og:url",
    },
    {
      content:
        "Discover the work of a Software Engineer, Frontend Developer, and UI/UX Designer. Explore a portfolio that blends technology and design seamlessly.",
      name: "description",
      property: "og:description",
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