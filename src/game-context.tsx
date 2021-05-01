import { createTrackedSelector } from "react-tracked"
import { TGameContext, TScoreboard } from "types"
import create from "zustand"

const gameStore = create<TGameContext>((set, get) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  score: 0,
  setScore: (score: number) => set(() => ({ score })),
  clock: 0,
  setClock: (clock: number) => set(() => ({ clock })),
  isGameStarted: false,
  isGameOver: false,
  scoreBoard: [],
  setScoreBoard: (scoreBoard: TScoreboard[]) => set(() => ({ scoreBoard })),
  startGame: () => {
    const { isGameStarted } = get()
    if (isGameStarted) return
    set({ isGameStarted: true })
    const now = Date.now()
    set({ clock: now })
  },
  gameOver: () => {
    set({ isGameStarted: false })
    set({ isGameOver: true })
  },
  savedScore: false,
  saveScore: () => {
    set({ savedScore: true })
  },
  newGame: () => {
    set({ score: 0 })
    set({ isGameOver: false })
    set({ savedScore: true })
  },
}))

export const trackedGameStore = createTrackedSelector(gameStore)
