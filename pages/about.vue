<template>
  <SectionBase add-class="relative overflow-hidden">
    <Container>
      <div class="relative">
        <div class="grid xl:grid-cols-6 gap-10">
          <div class="order-last xl:col-span-2">
            <div class="sticky top-24">
              <div class="prose dark:prose-invert">
                <h3 class="text-xl font-medium">Skills</h3>
                <ul>
                  <li>HTML</li>
                  <li>Cascading Style Sheets (CSS)</li>
                  <li>JavaScript</li>
                  <li>Front-End Development</li>
                  <li>Responsive Web Design</li>
                  <li>Desain Web</li>
                  <li>Vue.js</li>
                  <li>Vuex</li>
                  <li>Tailwind CSS</li>
                  <li>MySQLi</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4">
            <Headline>
              <span
                >Hey there! My name is R. Cakradana Ardhanurahman Yudhatama, and
                Cakra in short.</span
              >
            </Headline>
            <div
              class="prose mb-3 xl:mb-5 dark:prose-invert xl:text-lg max-w-none"
            >
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

<style scoped></style>
