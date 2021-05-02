import { StyledButton } from "components/Game/Styled.Button"
import { trackedGameStore } from "gameStore"
import { useRef } from "react"
import { TScoreboard } from "types"
import { getDeviceType } from "utils"
import { leaderboardRef } from "../../firebase"
import { StyledGameOver } from "./Styled.GameOver"

export const GameOver = () => {
  const {
    newGame,
    isLoading,
    isScoreSaved,
    score,
    clicks,
    scoreBoard,
    setScoreBoard,
    setIsLoading,
    saveScore,
  } = trackedGameStore()
  const nameRef = useRef<HTMLInputElement>(null)

  const updateLeaderboard = async (ref: React.RefObject<HTMLInputElement>) => {
    const device = getDeviceType()

    const name = ref.current?.value || "Player"
    const id = Date.now()
    const stats: TScoreboard = { id, name, device, clicks, score }
    setIsLoading(true)
    await leaderboardRef.add(stats).catch((error) => {
      throw new Error(`Error adding document: ${error}`)
    })
    setIsLoading(false)
    setScoreBoard([...scoreBoard, stats])
    saveScore()
  }

  return (
    <StyledGameOver>
      <div>
        {isScoreSaved ? (
          <>
            <h4>Score saved to the leaderboard!</h4>

            <StyledButton type="button" onClick={() => newGame(true)}>
              Start New Game
            </StyledButton>
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
