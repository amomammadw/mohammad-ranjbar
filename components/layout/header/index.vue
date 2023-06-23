<template>
  <header class="py-4">
    <nav class="container flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <Icon name="mdi:code-tags" class="text-3xl" />
        <span class="font-medium">
          {{ config.title }}
          <span class="text-blue-700 ml-2 lg:inline hidden">
            {{ config.slogan }}
          </span>
        </span>
      </div>

      <div>
        <LayoutHeaderList :items="config.items" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const config = useAppConfig().config.header;
</script>
