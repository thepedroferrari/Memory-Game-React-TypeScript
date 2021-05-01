import { Fragment, useCallback, useEffect, useState } from "react"
import { TScoreboard } from "types"

import { leaderboardRef } from "../../firebase"
import { sortNumbersBy } from "../../utils"

export const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<TScoreboard[]>([])

  const getLeaderboard = useCallback(async () => {
    const leaderboardResults = await leaderboardRef.get()
    const promisedLeaderboard = leaderboardResults.docs.map((doc) => doc.data())

    if (promisedLeaderboard.length > 0) {
      const newLeaderboard = sortNumbersBy(
        "score",
        Object.values(promisedLeaderboard),
        "dsc",
      )
      setLeaderboard(newLeaderboard as TScoreboard[])
    }
  }, [])

  useEffect(() => {
    getLeaderboard()
  }, [getLeaderboard])

  return (
    <>
      <h3>Leaderboard</h3>
      <ul className="leaderboard">
        <li>
          <strong>Name</strong>
        </li>
        <li>
          <strong>Device</strong>
        </li>
        <li>
          <strong>Score</strong>
        </li>
        {leaderboard.map((entry) => (
          <Fragment key={entry.id}>
            <li>{entry.name}</li>
            <li>{entry.device}</li>
            <li>{entry.score}</li>
          </Fragment>
        ))}
      </ul>
    </>
  )
}
