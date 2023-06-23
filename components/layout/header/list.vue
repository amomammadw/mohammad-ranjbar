<template>
  <ul class="flex items-center space-x-5">
    <template v-for="linkItem in items">
      <li>
        <NuxtLink
          :to="linkItem.link ?? undefined"
          target="_blank"
          class="font-medium"
        >
          <Icon v-if="linkItem.icon" :name="linkItem.icon" size="1.7rem" />
          <span v-if="linkItem.text"> {{ linkItem.text }}</span>
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: ILinkItem[];
}>();
</script>
