import { CardsGrid } from "components/CardsGrid"
import { GameOver } from "components/GameOver"
import { Leaderboard } from "components/Leaderboard"
import { Timer } from "components/Timer"
import { trackedGameStore } from "gameStore"
import { StyledButton } from "./Styled.Button"
import { StyledGameWrapper } from "./Styled.GameWrapper"
import { StyledH1 } from "./Styled.H1"

export const Game = () => {
  const { isGameStarted, isGameOver, startGame } = trackedGameStore()

  return (
    <StyledGameWrapper>
      <header>
        {isGameStarted && <Timer />}
        <StyledH1>Memory Game</StyledH1>
      </header>
      {isGameOver && <GameOver />}

      <CardsGrid />
      <StyledButton type="button" disabled={isGameStarted} onClick={startGame}>
        {isGameStarted ? "GAME STARTED" : "START GAME"}
      </StyledButton>

      <Leaderboard />
    </StyledGameWrapper>
  )
}
