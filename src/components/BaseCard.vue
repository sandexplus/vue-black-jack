<template>
  <div class="card relative">
    <div
      v-if="!store.state.isGameFinished && isHidden"
      class="absolute w-full h-full rounded-xl bg-gray-400 top-0 left-0 z-50"
    />
    <base-img
      v-if="store.state.isGameFinished || !isHidden"
      class="absolute right-[10px] top-[10px] !w-[30px]"
      :src="imageSuit"
    />
    <base-img
      v-if="store.state.isGameFinished || !isHidden"
      class="absolute left-[10px] bottom-[10px] !w-[30px]"
      :src="imageSuit"
    />
    <p
      v-if="store.state.isGameFinished || !isHidden"
      class="self-center text-[50px]"
    >
      {{ value }}
    </p>
  </div>
</template>

<script setup lang="ts">
import BaseImg from '@/components/BaseImg.vue'
import { TCards } from '@/interfaces'
import { computed } from 'vue'
import { useStore } from 'vuex'

interface Props {
  value: string
  suit: TCards
  isHidden?: boolean
}

const props = defineProps<Props>()
const store = useStore()

const imageSuit = computed(() => {
  return require(`@/assets/img/${props.suit}.png`)
})
</script>

<style lang="scss" scoped>
.card {
  @apply flex justify-center items-center rounded-xl bg-white border border-black w-[150px] h-[200px];
  box-shadow: 0 0 4px 4px rgba(155, 155, 155, .3);
}

:deep(.base-image) {
  @apply max-w-[50px];
}
</style>
