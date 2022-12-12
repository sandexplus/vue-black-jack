import { useStore } from 'vuex'
import { computed, watch } from 'vue'

export const useHint = () => {
  const store = useStore()

  const playerScore = computed(() => store.state.playerHandScores)
  const dealerScore = computed(() => store.state.dealerHandScores)

  const getPlayerHint = () => {
    if (dealerScore.value === 21) {
      return 'Вероятно, у дилера Блэк Джек. Желательно брать карту'
    }
    if (playerScore.value <= 16) {
      return 'Предлагаем взять карту, у вас меньше 17 очков и у дилера не Блэк Джек'
    }
    if (playerScore.value === 17) {
      return 'Вы можете брать карту на свой страх и риск, шанс проиграть 50/50'
    }
    if (playerScore.value > 17 && playerScore.value < 21) {
      return 'Желательно больше не брать карту, у Вас хороший счет для победы'
    }
    return 'У Вас 21 очко. Необходимо вскрываться'
  }

  const getFinishHint = () => {
    if (dealerScore.value === 21) {
      return 'Дилер победил потому что у него выпал Блэк Джек'
    }
    if (playerScore.value > 21) {
      return `Дилер победил потому что у Вас больше 21 очка (${playerScore.value})`
    }
    if (playerScore.value === 21 && dealerScore.value !== 21) {
      return 'Вы победили потому что у Вас выпал Блэк Джек'
    }
    if (playerScore.value < dealerScore.value && dealerScore.value < 21) {
      return 'Дилер победил потому что у него больше очков чем у Вас'
    }
    return 'Вы победили потому что у Вас больше очков чем у дилера'
  }

  const isEnd = computed(() => store.state.isGameFinished)

  const getHint = () => {
    if (isEnd.value) {
      store.commit('setHintText', getFinishHint())
    } else {
      store.commit('setHintText', getPlayerHint())
    }
  }

  watch(isEnd, () => {
    getHint()
  })

  watch(playerScore, () => {
    getHint()
  })

  watch(dealerScore, () => {
    getHint()
  })
}
