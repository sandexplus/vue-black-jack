<template>
  <button
    class="button"
    :class="type"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { EmitsEnum } from '@/enums'
import { inject } from 'vue'

interface Props {
  type?: 'danger' | 'primary' | 'light'
  emit: EmitsEnum
  functionPayload?: unknown
}

const props = defineProps<Props>()

const emits = inject<(payload: unknown) => void>(props.emit, () => {})

const handleClick = () => {
  emits(props.functionPayload)
}
</script>

<style lang="scss" scoped>
.button {
  @apply w-full h-[50px] rounded-xl bg-blue-400 flex justify-center items-center font-semibold text-[20px] transition-all transition-[.3s];

  &:hover {
    box-shadow: 0 0 4px 4px rgba(155, 155, 155, .2);
  }

  &.danger {
    @apply bg-red-400;
  }

  &.primary {
    @apply bg-green-400;
  }

  &.light {
    @apply bg-yellow-400;
  }
}
</style>
