<template>
  <div class="base-navigation">
    <base-button
      :emit="EmitsEnum.RESTART_GAME"
      type="danger"
      class="max-w-[200px]"
    >
      Start New Game
    </base-button>
    <h1 v-if="winner">
      Winner is {{ winner }}!
    </h1>
    <base-button
      class="max-w-[200px]"
      :emit="EmitsEnum.TOGGLE_SETTINGS"
    >
      Open Settings
    </base-button>
  </div>
</template>

<script setup lang="ts">
import { EmitsEnum } from '@/enums'
import BaseButton from '@/components/BaseButton.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const winner = computed(() => store.state.winner)
</script>

<style lang="scss" scoped>
.base-navigation {
  @apply flex py-[50px] px-[70px] justify-between;
}
</style>
