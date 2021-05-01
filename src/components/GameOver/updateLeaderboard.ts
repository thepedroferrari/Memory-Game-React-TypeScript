import { trackedGameStore } from "gameStore"
import { leaderboardRef } from "../../firebase"
import { getDeviceType } from "../../utils"
import { TScoreboard } from "../../types"

const device = getDeviceType()

export const updateLeaderboard = async (
  nameRef: React.RefObject<HTMLInputElement>,
) => {
  console.log("Update Leaderboard called")
  const {
    score,
    scoreBoard,
    setScoreBoard,
    setIsLoading,
    saveScore,
    clicks,
  } = trackedGameStore()

  const name = nameRef.current?.value || "Player"
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
