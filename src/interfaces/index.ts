export type TCards = 'clubs' | 'diamonds' | 'hearts' | 'spades'

export interface ICard {
  value: string
  suit: TCards
}
