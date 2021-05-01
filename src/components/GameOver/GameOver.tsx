import { trackedGameStore } from "game-context"
import { useRef, useState } from "react"
import { leaderboardRef } from "../../firebase"
import { getDeviceType } from "../../utils"

const device = getDeviceType()

const GameOver = () => {
  const {
    score,
    newGame,
    scoreBoard,
    setScoreBoard,
    isLoading,
    setIsLoading,
  } = trackedGameStore()

  const nameRef = useRef<HTMLInputElement>(null)
  const [isSaved, setIsSaved] = useState(false)

  const updateLeaderboard = async () => {
    const name = nameRef.current?.value || "Player"
    setIsLoading(true)
    await leaderboardRef
      .add({
        name,
        score,
        device,
      })
      .catch((error) => {
        console.error("Error adding document: ", error)
      })
    setIsLoading(false)
    setScoreBoard([...scoreBoard, { id: Date.now(), name, device, score }])
    setIsSaved(true)
  }

  return (
    <>
      {isSaved ? (
        <>
          <h4>Score saved to the leaderboard!</h4>
          <button type="button" onClick={newGame}>
            New Game
          </button>
        </>
      ) : (
        <>
          <h4>Add yourself to the leaderboard</h4>

          <label htmlFor="leaderboardName">
            Your name:
            <input
              ref={nameRef}
              id="leaderboardName"
              name="leaderboardName"
              maxLength={20}
            />
          </label>

          <button type="button" onClick={updateLeaderboard}>
            {isLoading ? "Saving..." : "Save score to Leaderboard"}
          </button>
        </>
      )}
    </>
  )
}

export default GameOver
