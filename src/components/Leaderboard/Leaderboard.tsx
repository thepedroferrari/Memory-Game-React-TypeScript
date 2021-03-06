import { CloseButton } from "components/Buttons"
import { useCallback, useEffect, useState } from "react"
import { TScoreboard } from "types"
import { leaderboardRef } from "../../firebase"
import { sortNumbersBy } from "../../utils"
import { StyledLeaderboard } from "./Styled.Leaderboard"
import { StyledLeaderboardHeader } from "./Styled.LeaderboardHeader"
import { StyledLeaderboardModal } from "./Styled.LeaderboardModal"

type Props = {
  closeLeaderboard: () => void
}
export const Leaderboard = ({ closeLeaderboard }: Props) => {
  const [leaderboard, setLeaderboard] = useState<TScoreboard[]>([])

  const getLeaderboard = useCallback(async () => {
    const leaderboardResults = await leaderboardRef.get()
    const promisedLeaderboard = leaderboardResults.docs.map((doc) => doc.data())

    if (promisedLeaderboard.length > 0) {
      const newLeaderboard = sortNumbersBy(
        "score",
        Object.values(promisedLeaderboard),
        "asc",
      )
      setLeaderboard(newLeaderboard as TScoreboard[])
    }
  }, [])

  useEffect(() => {
    getLeaderboard()
  }, [getLeaderboard])

  useEffect(() => {}, [leaderboard])

  const leaderboardResults = leaderboard.map(
    ({ id, name, device, score, clicks }, i) => (
      <ul key={id}>
        <li>
          <span>
            {i + 1}. {name}
          </span>
          <span>{device}</span>
          <span>{clicks}</span>
          <span>{score}s</span>
        </li>
      </ul>
    ),
  )

  return (
    <StyledLeaderboardModal>
      <CloseButton close={closeLeaderboard} />
      <StyledLeaderboardHeader>Leaderboard</StyledLeaderboardHeader>
      <StyledLeaderboard>
        <li>
          <span>
            <strong>Name</strong>
          </span>
          <span>
            <strong>Device</strong>
          </span>
          <span>
            <strong>Clicks</strong>
          </span>
          <span>
            <strong>Time</strong>
          </span>
        </li>
        {leaderboardResults}
      </StyledLeaderboard>
    </StyledLeaderboardModal>
  )
}
