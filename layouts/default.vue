<template>
  <NuxtLoadingIndicator
    color="repeating-linear-gradient(to right,#f47572 0%,#e05f6b 25%,#cd4a65 50%,#ba355e 100%)"
  />
  <div class="bg-white dark:bg-neutral-900 dark:text-primary-50 min-h-screen">
    <div class="relative">
      <Sidebar />
      <main class="order-1 relative pb-20 lg:pb-0 lg:order-2 lg:ml-[6rem]">
        <Navbar />
        <slot />
        <Footer />
      </main>
    </div>
  </div>
</template>
