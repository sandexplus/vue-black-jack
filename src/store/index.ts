import { createStore } from 'vuex'
import { ICard } from '@/interfaces'

export default createStore({
  state: {
    deckCount: '1',
    isSettingsOpen: false,
    decks: [] as ICard[],
    playerHand: [] as ICard[],
    dealerHand: [] as ICard[],
    isGameFinished: false,
    winner: null as 'player' | 'dealer' | null,
    needHints: false
  },
  getters: {
  },
  mutations: {
    setDecksCount: (state, payload : string) => {
      state.deckCount = payload
    },
    setDecks: (state, payload : ICard[]) => {
      state.decks = payload
    },
    removeCardsFromTop: (state, payload) => {
      state.decks.splice(0, payload)
    },
    setHand: (state, payload: {hand: 'playerHand' | 'dealerHand', cards: ICard[], method: 'add' | 'replace'}) => {
      if (payload.method === 'add') {
        state[payload.hand].push(...payload.cards)
      } else {
        state[payload.hand] = payload.cards
      }
    },
    changeGameActivity: (state, payload : boolean) => {
      state.isGameFinished = payload
    },
    setWinner: (state, payload: 'player' | 'dealer' | null) => {
      state.winner = payload
    },
    setHints: (state, payload) => {
      state.needHints = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
