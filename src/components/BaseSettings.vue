<template>
  <teleport
    v-if="modelValue"
    to="body"
  >
    <div class="modal">
      <div class="modal__container">
        <div class="flex flex-col gap-14">
          <div class="flex flex-col gap-10">
            <div class="flex items-center gap-[10px]">
              <p>Decks count: </p>
              <base-input
                v-model="decksCount"
              />
            </div>
            <base-button
              :emit="EmitsEnum.SAVE_DECKS_COUNT"
              :function-payload="decksCount"
              type="primary"
            >
              Save Decks Count
            </base-button>
          </div>
          <div class="flex flex-col gap-10 items-center">
            <div class="flex items-center gap-[10px]">
              <p>Need hints </p>
              <base-toggler
                :emit="EmitsEnum.TOGGLE_HINTS"
                :is-active="store.state.needHints"
              />
            </div>
          </div>
        </div>
        <base-button :emit="EmitsEnum.TOGGLE_SETTINGS">
          Close
        </base-button>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import { EmitsEnum } from '@/enums'
import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'
import BaseToggler from '@/components/BaseToggler.vue'
import { useStore } from 'vuex'

interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()
const store = useStore()

const decksCount = ref<string>('1')
</script>

<style lang="scss" scoped>
.modal {
  @apply fixed w-screen h-screen z-50 top-0 left-0 bg-[rgba(0,0,0,.6)];

  &__container {
    @apply absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2;
    @apply w-[500px] h-[700px] max-h-[85vh] border border-black bg-white flex flex-col justify-between gap-[20px] rounded-xl p-[50px];
  }
}
</style>
