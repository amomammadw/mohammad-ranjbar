<template>
  <button v-if="!to" :type="type" :disabled="disabled" :class="variant">
    <slot></slot>
  </button>

  <NuxtLink :to="to" v-else>
    <button :type="type" :disabled="disabled" :class="variant">
      <slot></slot>
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  variant: "outline" | "flat";
  size?: "sm" | "md" | "lg";
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  to?: string;
}>();
</script>

<style scoped>
.outline {
  @apply px-4 py-2 rounded-lg border outline-none text-blue-700 border-blue-700;
}

.flat {
  @apply px-4 py-2 rounded-lg outline-none bg-blue-700 hover:bg-blue-800 text-white;
}
</style>
