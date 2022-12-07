<template>
  <div
    class="base-toggler"
    :class="{
      isActive
    }"
    @click="toggle"
  />
</template>

<script setup lang="ts">
import { EmitsEnum } from '@/enums'
import { inject } from 'vue'

interface Props {
  emit: EmitsEnum
  isActive: boolean
}

const props = defineProps<Props>()
const emits = inject<(payload: unknown) => void>(props.emit, () => {})

const toggle = () => {
  emits(props.emit)
}
</script>

<style lang="scss" scoped>
.base-toggler {
  @apply relative w-[30px] h-[30px] border border-black cursor-pointer;

  &.isActive {
    &:before {
      content: '';
      @apply w-[20px] h-[20px] absolute left-[4px] top-[4px] bg-black;
    }
  }
}
</style>
