<template>
  <div
    v-if="needHints"
    class="base-hint"
  >
    <p class="text-[18px]">
      {{ hintText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const hintText = computed(() => store.state.hintText)
const needHints = computed(() => store.state.needHints)
</script>

<style lang="scss" scoped>
.base-hint {
  @apply bg-yellow-100 p-[20px];
}
</style>
