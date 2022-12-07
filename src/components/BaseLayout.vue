<template>
  <div>
    <base-navigation />
    <base-game-table />
    <base-settings
      v-model="store.state.isSettingsOpen"
    />
  </div>
</template>

<script setup lang="ts">
import { EmitsEnum } from '@/enums'
import BaseSettings from '@/components/BaseSettings.vue'
import { useStore } from 'vuex'
import { onMounted, provide } from 'vue'
import { useDeck } from '@/use/deck'
import BaseNavigation from '@/components/BaseNavigation.vue'
import BaseGameTable from '@/components/BaseGameTable.vue'
import { ICard } from '@/interfaces'

const store = useStore()
const deck = useDeck()

defineEmits([
  EmitsEnum.TOGGLE_SETTINGS,
  EmitsEnum.GIVE_CARDS,
  EmitsEnum.HOLD,
  EmitsEnum.SAVE_DECKS_COUNT
])

const calculateValue = (hand: 'dealerHand' | 'playerHand') => {
  const getRealValue = (value: string, idx: number) : number => {
    switch (value) {
      case 'A':
        if (idx < 2) {
          return 11
        }
        return 1
      case 'K':
        return 10
      case 'Q':
        return 10
      case 'J':
        return 10
      default:
        return +value
    }
  }

  return store.state[hand].reduce((acc: number, card: ICard, idx: number) => {
    return acc + getRealValue(card.value, idx)
  }, 0)
}

const toggleSettings = () => {
  store.state.isSettingsOpen = !store.state.isSettingsOpen
}

const restartGame = () => {
  const giveCards = (count: number) => {
    store.commit('setHand', {
      hand: 'playerHand',
      cards: deck.giveCard(count)
    })
    store.commit('setHand', {
      hand: 'dealerHand',
      cards: deck.giveCard(count)
    })
  }
  giveCards(2)

  if (store.state.decks.length < 20) {
    deck.setDecks(store.state.deckCount)
  }

  store.commit('changeGameActivity', false)
  store.commit('setWinner', null)
}

const saveDecksCount = (count: number) => {
  restartGame()
  store.commit('setDecksCount', count.toString())
  deck.setDecks(count)
}

const giveCards = (payload: {count: number, hand: 'playerHand' | 'dealerHand'}) => {
  if (store.state[payload.hand].length === 5) {
    return
  }
  const cards = deck.giveCard(payload.count)
  store.commit('setHand', {
    method: 'add',
    hand: payload.hand,
    cards
  })

  if (calculateValue(payload.hand) > 21) {
    if (payload.hand === 'dealerHand') {
      store.commit('setWinner', 'player')
    } else {
      store.commit('setWinner', 'dealer')
    }
    store.commit('changeGameActivity', true)
  }
}

const hold = () => {
  store.commit('changeGameActivity', true)

  const dealerScore = calculateValue('dealerHand')
  const playerScore = calculateValue('playerHand')

  if (dealerScore === 21) {
    store.commit('setWinner', 'dealer')
    return
  }
  if (dealerScore > playerScore) {
    store.commit('setWinner', 'dealer')
    return
  }
  store.commit('setWinner', 'player')
}

const toggleHints = () => {
  console.log(1)
  store.commit('setHints', !store.state.needHints)
}

provide(EmitsEnum.TOGGLE_SETTINGS, toggleSettings)
provide(EmitsEnum.RESTART_GAME, restartGame)
provide(EmitsEnum.GIVE_CARDS, giveCards)
provide(EmitsEnum.HOLD, hold)
provide(EmitsEnum.SAVE_DECKS_COUNT, saveDecksCount)
provide(EmitsEnum.TOGGLE_HINTS, toggleHints)

onMounted(() => {
  deck.setDecks(1)
})
</script>
