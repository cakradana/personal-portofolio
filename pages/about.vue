<template>
  <SectionBase add-class="relative overflow-hidden">
    <Container>
      <Swiper :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :slides-per-view="1" :loop="true" :effect="'creative'" :pagination="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }" :navigation="true">
        <SwiperSlide v-for="slide in 4" :key="slide">
          <nuxt-img :key="slide" :src="`/assets/about-pic-${slide}.jpg`" :alt="`Slide${slide}`" width="1280" class="object-cover rounded-lg h-72 lg:h-96 w-full" />
        </SwiperSlide>
      </Swiper>
      <div class="relative mt-10">
        <div class="grid xl:grid-cols-6 gap-10">
          <div class="order-last xl:col-span-2">
            <div class="sticky top-24">
              <div class="prose dark:prose-invert">
                <h3 class="text-xl font-medium">Skills</h3>
                <ul>
                  <li>Front-End Development</li>
                  <ul>
                    <li>HTML</li>
                    <li>Cascading Style Sheets (CSS)</li>
                    <li>JavaScript</li>
                    <li>Responsive Web Design</li>
                    <li>Browser Developer Tools</li>
                    <ul>
                      <li>Chrome DevTools</li>
                    </ul>
                    <li>Package Managers</li>
                    <ul>
                      <li>npm</li>
                      <li>yarn</li>
                      <li>pnpm</li>
                    </ul>
                  </ul>
                  <li>JavaScript Frameworks</li>
                  <ul>
                    <li>Vue.js</li>
                    <li>Nuxt.js</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                  </ul>
                  <li>Version Control</li>
                  <ul>
                    <li>Git</li>
                  </ul>
                  <li>CSS Frameworks</li>
                  <ul>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                  <li>Design</li>
                  <ul>
                    <li>Web Design</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4">
            <Headline>
              <span>Hey there! My name is R. Cakradana Ardhanurahman Yudhatama, and
                Cakra in short.</span>
            </Headline>
            <div class="prose mb-3 xl:mb-5 dark:prose-invert xl:text-lg max-w-none">
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
    </Container>
  </SectionBase>
</template>

<script>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default {
  name: "about",
};
</script>
<script setup>
import Headline from "~/components/Typo/Headline.vue";
import Container from "~/components/Section/Container.vue";

useHead({
  title: "About",
});
</script>

<style>

.swiper-button-prev, .swiper-button-next {
  color: rgb(69 10 10) !important;
  opacity: 0.5;
  font-weight: 900;
}

.swiper-button-prev:hover, .swiper-button-next:hover {
  opacity: 1;
}

.swiper-pagination-bullet {
  background: rgb(69 10 10) !important;
  opacity: 0.5  ;
  width: 20px;
  height: 20px;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
