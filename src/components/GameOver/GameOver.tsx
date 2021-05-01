import { StyledButton } from "components/Game/Styled.Button"
import { trackedGameStore } from "gameStore"
import { useRef } from "react"
import { StyledGameOver } from "./Styled.GameOver"
import { updateLeaderboard } from "./updateLeaderboard"

export const GameOver = () => {
  const { newGame, isLoading, isScoreSaved, score, clicks } = trackedGameStore()
  const nameRef = useRef<HTMLInputElement>(null)

  return (
    <StyledGameOver>
      <div>
        {isScoreSaved ? (
          <>
            <h4>Score saved to the leaderboard!</h4>
            <button type="button" onClick={() => newGame(true)}>
              New Game
            </button>
          </>
        ) : (
          <>
            <h4>
              You finished in {score} seconds with {clicks} clicks!
            </h4>
            <p>Save your score to the leaderboard</p>
            <label htmlFor="leaderboardName">
              <p>Your name</p>
              <input
                ref={nameRef}
                id="leaderboardName"
                name="leaderboardName"
                placeholder="Player"
                maxLength={20}
              />
            </label>

            <StyledButton
              type="button"
              onClick={() => updateLeaderboard(nameRef)}>
              {isLoading ? "Saving..." : "Save score to Leaderboard"}
            </StyledButton>

            <StyledButton type="button" onClick={() => newGame(false)}>
              New Game without saving
            </StyledButton>
          </>
        )}
      </div>
    </StyledGameOver>
  )
}
