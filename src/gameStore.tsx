import { Deck } from "components/CardsGrid"
import { createTrackedSelector } from "react-tracked"
import { TGameContext, TScoreboard } from "types"
import create from "zustand"

const gameStore = create<TGameContext>((set, get) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  score: 0,
  clock: 0,
  setClock: (seconds: number) => {
    set({ clock: seconds })
  },
  setScore: (score: number) => set(() => ({ score })),
  isGameStarted: false,
  isGameOver: false,
  scoreBoard: [],
  setScoreBoard: (scoreBoard: TScoreboard[]) => set(() => ({ scoreBoard })),
  startGame: () => {
    const { isGameStarted } = get()
    if (isGameStarted) return
    set({ isGameStarted: true })
  },
  gameOver: () => {
    const { clock } = get()
    set({ isGameStarted: false, isGameOver: true, score: clock })
  },
  isScoreSaved: false,
  saveScore: () => {
    set({ isScoreSaved: true })
  },
  newGame: (saved: boolean) => {
    set({
      score: 0,
      isGameStarted: true,
      isGameOver: false,
      isScoreSaved: saved,
      clicks: 0,
      cardsOpen: [],
      matches: [],
    })
  },
  clicks: 0,
  addClicks: () => {
    const { clicks } = get()
    set({ clicks: clicks + 1 })
  },
  matches: [],
  setMatches: (cards: Deck["id"][]) => {
    set({ matches: cards })
  },
  cardsOpen: [],
  setCardsOpen: (cards: Deck["id"][]) => {
    set({ cardsOpen: cards })
  },
}))

export const trackedGameStore = createTrackedSelector(gameStore)
