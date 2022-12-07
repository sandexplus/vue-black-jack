<template>
  <img
    :src="src"
    alt="1"
    class="base-image"
  >
</template>

<script setup lang="ts">
interface Props {
  src: string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.base-image {
  @apply w-full max-w-full object-contain max-h-full;
}
</style>
