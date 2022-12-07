<template>
  <div class="hand">
    <div class="flex flex-wrap gap-10">
      <base-card
        v-for="(card, i) in cards"
        :key="`card-${i}`"
        :suit="card.suit"
        :value="card.value"
        :is-hidden="i === 1 && owner === 'dealer'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICard } from '@/interfaces'
import BaseCard from '@/components/BaseCard.vue'

interface Props {
  cards: ICard[]
  owner: 'player' | 'dealer'
}

defineProps<Props>()
</script>

<style lang="scss" scoped>

</style>
