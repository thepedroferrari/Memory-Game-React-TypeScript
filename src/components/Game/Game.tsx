import { CardsGrid } from "components/CardsGrid"
import GameOver from "components/GameOver/GameOver"
import { Leaderboard } from "components/Leaderboard/Leaderboard"
import { Timer } from "components/Timer"
import { trackedGameStore } from "game-context"

export const Game = () => {
  const { isGameStarted, score, isGameOver, startGame } = trackedGameStore()

  return (
    <>
      <header>
        <span>
          <strong>Score</strong>: {score}
        </span>
        {isGameStarted && <Timer minutes="0" seconds="10" />}
      </header>
      {isGameOver ? (
        <GameOver />
      ) : (
        <>
          <CardsGrid />
          <button type="button" disabled={isGameStarted} onClick={startGame}>
            {isGameStarted ? "GAME STARTED" : "START GAME"}
          </button>
        </>
      )}

      <Leaderboard />
    </>
  )
}
