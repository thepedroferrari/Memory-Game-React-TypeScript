import { CardsGrid } from "components/CardsGrid"
import { GameOver } from "components/GameOver"
import { Leaderboard } from "components/Leaderboard"
import { Timer } from "components/Timer"
import { EmptyTimer } from "components/Timer/EmptyTimer"
import { trackedGameStore } from "gameStore"
import { useState } from "react"
import { StyledButton } from "./Styled.Button"
import { StyledGameWrapper } from "./Styled.GameWrapper"
import { StyledH1 } from "./Styled.H1"

export const Game = () => {
  const { isGameStarted, isGameOver } = trackedGameStore()
  const [shouldShowLeaderboard, setShouldShowLeaderboard] = useState(false)
  const closeLeaderboard = () => setShouldShowLeaderboard(false)
  return (
    <StyledGameWrapper>
      <div className="controls">
        {isGameStarted ? <Timer /> : <EmptyTimer />}
        <StyledButton
          type="button"
          onClick={() => setShouldShowLeaderboard((prev) => !prev)}>
          Show Leaderboard
        </StyledButton>
      </div>
      <header>
        <StyledH1>Memory Game</StyledH1>
      </header>
      {isGameOver && <GameOver />}
      {shouldShowLeaderboard && (
        <Leaderboard closeLeaderboard={closeLeaderboard} />
      )}

      <CardsGrid />
    </StyledGameWrapper>
  )
}
