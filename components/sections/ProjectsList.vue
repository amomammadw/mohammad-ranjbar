<template>
  <div class="mt-10 space-y-5">
    <template v-for="(projectItem, projectIndex) in projects">
      <div
        class="bg-white shadow-md rounded max-w-3xl mx-auto p-5 grid lg:grid-cols-2 grid-cols-1 items-center"
      >
        <div>
          <h2 class="font-bold text-3xl text-blue-500">
            {{ projectItem.title }}
          </h2>
          <p>{{ projectItem.description }}</p>
        </div>
        <div v-if="projectItem.image">
          <NuxtImg
            :src="projectItem.image.src"
            :alt="projectItem.image.alt"
            loading="lazy"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const projects = useAppConfig().config.projects;
</script>
