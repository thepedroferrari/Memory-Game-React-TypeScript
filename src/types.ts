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
  savedScore: boolean
  saveScore: () => void
  newGame: () => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export type TScoreboard = {
  id: number
  name: string
  device: string
  score: number
}
