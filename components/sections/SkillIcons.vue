<template>
  <div class="grid grid-cols-8 justify-items-center gap-4">
    <template v-for="(iconItem, iconIndex) in config">
      <NuxtImg
        width="70"
        height="70"
        loading="lazy"
        :src="iconItem.src"
        :alt="iconItem.alt"
        class="lg:col-span-1 md:col-span-2 col-span-4"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
const config = useAppConfig().config.skills;
</script>
