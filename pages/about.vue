<template>
  <SectionBase add-class="relative overflow-hidden">
    <SectionContainer>
      <Swiper :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :slides-per-view="1" :loop="true"
        :effect="'creative'" :pagination="true" :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }" :navigation="true">
        <SwiperSlide v-for="slide in 4" :key="slide">
          <nuxt-img :key="slide" :src="`/img/about-pic-${slide}.jpg`" :alt="`Slide${slide}`" width="640"
            class="object-cover h-72 lg:h-96 w-full" />
        </SwiperSlide>
      </Swiper>
      <div class="relative mt-10">
        <div class="grid lg:grid-cols-6 gap-10">
          <div class="order-last lg:col-span-2">
            <div class="sticky top-24">
              <div class="prose dark:prose-invert max-w-full">
                <h3 class="text-2xl font-medium font-display dark:text-primary-200 text-primary-950">Skills</h3>
                <div class="divide-y divide-gray-300">
                  <template v-for="(skill, index) in skills" :key="index">
                    <Accordion :title="skill.title" :id="`skill-${index}`" :active="skill.active">
                      <ul class="my-0" v-html="skill.content" />
                    </Accordion>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4">
            <TypoHeadline>
              <span>Hey there! My name is R. Cakradana Ardhanurahman Yudhatama, and
                Cakra in short.</span>
            </TypoHeadline>
            <div class="prose mb-3 lg:mb-5 dark:prose-invert lg:text-lg max-w-none">
              <p>
                As a frontend developer, I have always been driven by my passion
                for creating beautiful and intuitive websites and applications.
                In 2022, I was faced with the challenge of completing my final
                project while also trying to break into the industry. Despite
                the struggles, I never gave up and continued to work hard and
                learn as much as I could.
              </p>
              <p>
                My determination paid off when I landed my first job as a
                frontend developer at PT Langitpay Digital Indonesia. It was an
                amazing opportunity to work for such a well-respected company,
                and I was able to learn and grow so much in my time there,
                special thanks to Adit Ilham Nugroho and Victor Wicaksono.
              </p>
              <p>
                One of the highlights of my career at PT Langitpay Digital
                Indonesia was the opportunity to visit Tokopedia with Padilah O.
                and Gusnadi Putra. It was a truly memorable experience, and I am
                grateful for the chance to have learned from such talented and
                innovative individuals, Andika Nugraha, Pires Cerullo.
              </p>
              <p>
                After several months at PT Langitpay Digital Indonesia, I am now
                a frontend developer at Komerce, an end-to-end e-commerce
                enabler for Indonesian SMEs. I am excited to be part of such a
                dynamic and forward-thinking company, and I am eager to continue
                learning and growing in my role.
              </p>
              <p>
                Overall, my journey as a frontend developer has been filled with
                challenges and accomplishments. I am grateful for every
                opportunity I have had to learn and grow, and I am excited to
                see what the future holds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  </SectionBase>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'R Cakradana | About',
  
  ogUrl: 'https://rcakradana.me/about',
  ogTitle: 'R Cakradana | About',
  
  twitterTitle: 'R Cakradana | About',
})

const skills = ref([
  {
    title: "Front-End Development",
    content: "<li>HTML</li> <li>Cascading Style Sheets (CSS)</li> <li>JavaScript</li> <li>Responsive Web Design</li> <li>Browser Developer Tools</li> <ul> <li>Chrome DevTools</li> </ul> <li>Package Managers</li> <ul> <li>npm</li> <li>yarn</li> <li>pnpm</li> </ul>",
    active: false,
  },
  {
    title: "JavaScript Frameworks",
    content: "<li>Vue.js</li> <li>Nuxt.js</li> <li>React.js</li> <li>Next.js</li>",
    active: false,
  },
  {
    title: "Version Control",
    content: "<li>Git</li>",
    active: false,
  },
  {
    title: "CSS Frameworks",
    content: "<li>Tailwind CSS</li> <li>Bootstrap</li>",
    active: false,
  },
  {
    title: "Design",
    content: "<li>Web Design</li>",
    active: false,
  },
]);
</script>