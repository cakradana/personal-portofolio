<template>
  <SectionBase add-class="relative">
    <SectionContainer>
      <div class="grid lg:grid-cols-2 lg:gap-10">
        <div class="lg:order-first">
          <div class="flex flex-wrap gap-3 mb-5">
            <a
              class="inline-block px-3.5 border rounded-full py-1 text-sm font-medium border-primary-800 border-dashed dark:border-primary-300 bg-primary-600 text-primary-800 dark:text-primary-300 bg-opacity-10 hover:bg-primary-300 dark:hover:bg-primary-800 hover:shadow-lg transition duration-300 ease-in-out"
              href="mailto:rcakradana@gmail.com"
            >
              📩 rcakradana@gmail.com
            </a>
            <a
              :href="`https:${cv?.fields.cv.fields.file.url}`"
              class="inline-block px-3.5 border rounded-full py-1 text-sm font-medium border-primary-800 border-dashed dark:border-primary-300 bg-primary-600 text-primary-800 dark:text-primary-300 bg-opacity-10 hover:bg-primary-300 dark:hover:bg-primary-800 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
              @click.prevent="
                downloadCV(
                  `https:${cv?.fields.cv.fields.file.url}`,
                  `CV_Resume_R Cakradana_${formatDate(`${cv?.sys.updatedAt}`)}.pdf`,
                )
              "
            >
              ⬇️ Here's my Resume
            </a>
          </div>

          <TypoHeadline>
            <p class="inline">
              <span class="inline-block animate-wave transform origin-[70%_70%]"
                >👋</span
              >
              Hi!
            </p>
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
            {{ new Date().getFullYear() - 2021 }} years of experience in
            Software Engineering, and I am eager to collaborate with you on your
            next project.
          </p>
          <ul class="grid gap-y-3 mb-10">
            <li class="flex gap-2 items-center">
              <span class="text-primary-800 dark:text-primary-300">✓</span>
              <span>Building scalable and efficient software solutions</span>
            </li>
            <li class="flex gap-2 items-center">
              <span class="text-primary-800 dark:text-primary-300">✓</span>
              <span>Designing engaging and user-friendly frontend interfaces</span>
            </li>
            <li class="flex gap-2 items-center">
              <span class="text-primary-800 dark:text-primary-300">✓</span>
              <span>Optimizing frontend performance and responsiveness</span>
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
              class="relative group bg-gradient-to-t text-center overflow-hidden from-neutral-300 to-neutral-200 dark:to-neutral-800 dark:from-neutral-900 rounded-xl"
            >
              <span
                class="bg-primary-900 dark:bg-primary-400 group-hover:scale-150 transition-all absolute animate-pulse rounded-full bottom-0 translate-y-1/2 blur-3xl left-0 w-full aspect-square"
              ></span>
              <nuxt-img
                src="/img/my-photo.png"
                class="inline-block w-64 lg:w-96 relative rounded-xl"
                loading="lazy"
                alt="Cakra"
                width="640"
                preload
              />
              <div
                class="absolute z-50 bg-gradient-to-br from-primary-400 to-primary-900 dark:from-primary-300 dark:to-primary-800 flex place-items-center gap-5 shadow-lg p-2 rounded-xl top-2 right-2"
              >
                <div class="aspect-square w-8 h-8">
                  <span class="w-full text-2xl">☕️</span>
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
import { getCv } from "~/repositories/cvRepository";

const cv = await getCv();

const jobs = ["Software Engineer", "Frontend Developer"];

const currentJob = ref(jobs[0]);

let index = 0;

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % jobs.length;
    currentJob.value = jobs[index];
  }, 4000);
});

const downloadCV = async (file: string, name: string) => {
  try {
    const response = await fetch(file);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading CV:", error);
    // Fallback to opening in a new tab if there's an error
    window.open(file, "_blank");
  }
};
</script>
