<template>
  <ul
    class="lg:flex-row flex-col items-center text-lg lg:space-x-6 space-x-0 lg:space-y-0 space-y-4"
  >
    <template v-for="(linkItem, linkIndex) in items">
      <li>
        <NuxtLink
          :to="linkItem.link"
          class="flex items-center"
          active-class="!text-blue-500 !font-medium"
        >
          <Icon :name="(linkItem.icon as string)" class="me-2" />
          {{ linkItem.text }}
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items?: ILinkItem[];
}>();
</script>
