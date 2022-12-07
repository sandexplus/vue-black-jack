<template>
  <input
    class="base-input"
    :value="modelValue"
    @input="inputHandler"
  >
</template>

<script setup lang="ts">
interface Props {
  isNumber?: boolean
  modelValue?: string
}

const props = defineProps<Props>()

const emits = defineEmits(['update:modelValue'])

const inputHandler = ($event: Event) => {
  emits('update:modelValue', ($event.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped>
.base-input {
  @apply w-[200px] border border-gray-400 h-[40px] rounded-xl px-[10px] text-[20px];
}
</style>
