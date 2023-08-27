<template>
  <h2 class="text-3xl mt-20 font-bold">
    Projects that I recently contributed in:
  </h2>
  <div class="mt-10 space-y-5">
    <template v-for="(projectItem, projectIndex) in projects">
      <div
        class="bg-white shadow-lg rounded-lg mx-auto p-9 grid lg:grid-cols-2 grid-cols-1 gap-4"
      >
        <div>
          <NuxtLink
            :href="projectItem.link"
            target="_blank"
            class="font-bold text-3xl text-blue-500 hover:text-blue-700 transition-all"
          >
            {{ projectItem.title }}
          </NuxtLink>
          <p class="my-5">{{ projectItem.description }}</p>
          <b>Tech Stack:</b>
          <ol class="list-disc ml-7">
            <li v-for="(stackItem, stackIndex) in projectItem.stack">
              {{ stackItem }}
            </li>
          </ol>
        </div>
        <div v-if="projectItem.image">
          <NuxtImg
            class="border rounded"
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
