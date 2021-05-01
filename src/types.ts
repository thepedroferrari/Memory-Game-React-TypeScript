import { Deck } from "components/CardsGrid"

export type TGameContext = {
  score: number
  setScore: (score: number) => void
  clock: number
  setClock: (clock: number) => void
  isGameStarted: boolean
  isGameOver: boolean
  scoreBoard: TScoreboard[]
  setScoreBoard: (scoreBoard: TScoreboard[]) => void
  startGame: () => void
  gameOver: () => void
  isScoreSaved: boolean
  saveScore: () => void
  newGame: (saved: boolean) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  matches: Deck["id"][]
  setMatches: (cards: Deck["id"][]) => void
  clicks: number
  addClicks: () => void
  cardsOpen: Deck["id"][]
  setCardsOpen: (cards: Deck["id"][]) => void
}

export type TScoreboard = {
  id: number
  name: string
  device: string
  score: number
  clicks: number
}
