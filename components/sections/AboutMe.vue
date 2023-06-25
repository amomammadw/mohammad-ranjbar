<template>
  <div
    class="grid grid-cols-2 items-center justify-items-center gap-4 mx-auto lg:my-28 my-12"
  >
    <div class="lg:col-span-1 col-span-full lg:order-1 order-2">
      <h2 class="lg:text-5xl text-3xl font-bold mb-3">{{ config.title }}</h2>
      <p class="text-2xl leading-9" v-html="config.description"></p>
    </div>

    <div
      class="lg:col-span-1 col-span-full lg:order-2 order-1 lg:justify-self-end"
    >
      <nuxt-img
        :src="config.image.src"
        width="300"
        height="300"
        :alt="config.image.alt"
        class="lg:rounded-xl rounded-full lg:w-[300px] lg:h-auto w-64 h-64 object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useAppConfig().config.about;
</script>
