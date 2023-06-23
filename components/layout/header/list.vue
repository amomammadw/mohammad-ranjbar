<template>
  <ul class="flex items-center space-x-5">
    <template v-for="linkItem in items">
      <li>
        <NuxtLink :to="linkItem.link" class="font-medium">{{
          linkItem.text
        }}</NuxtLink>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: ILinkItem[];
}>();
</script>
