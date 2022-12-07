<template>
  <div class="flex flex-col base-game-table items-center gap-20">
    <div class="flex justify-center gap-40 min-h-[200px]">
      <base-hand
        owner="player"
        :cards="playerHand"
      />
      <base-hand
        owner="dealer"
        :cards="dealerHand"
      />
    </div>
    <div
      v-if="showPlayerButtons"
      class="flex gap-20"
    >
      <base-button
        :emit="EmitsEnum.GIVE_CARDS"
        type="primary"
        :function-payload="{
          count: 1,
          hand: 'playerHand'
        }"
        class="!w-[150px]"
      >
        One More
      </base-button>
      <base-button
        :emit="EmitsEnum.HOLD"
        type="danger"
        class="!w-[150px]"
      >
        Hold
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHand from '@/components/BaseHand.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import { EmitsEnum } from '@/enums'

const store = useStore()
const playerHand = computed(() => store.state.playerHand)
const dealerHand = computed(() => store.state.dealerHand)

const showPlayerButtons = computed(() => store.state.playerHand.length && !store.state.isGameFinished)
</script>

<style lang="scss" scoped>

</style>
