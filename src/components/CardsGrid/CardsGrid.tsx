import { Card } from "components/Card/Card"
import { StyledButton } from "components/Game/Styled.Button"
import { trackedGameStore } from "gameStore"
import shuffle from "lodash.shuffle"
import { useEffect, useState } from "react"
import { didCardsMatch } from "utils"
import { ONE_SECOND_MS } from "../../constants"
import { deck, Deck } from "./deck"
import { StyledGrid } from "./StyledGrid"

export const CardsGrid = () => {
  const {
    gameOver,
    isGameStarted,
    cardsOpen,
    setCardsOpen,
    matches,
    setMatches,
    addClicks,
    startGame,
  } = trackedGameStore()

  const [shuffledDeck, setShuffledDeck] = useState(shuffle(deck))

  const handleOpenCard = (id: Deck["id"]) => {
    if (cardsOpen.length < 2) {
      setCardsOpen([...cardsOpen, id])
      addClicks()
    }
  }

  useEffect(() => {
    if (matches.length === deck.length) {
      gameOver()
    }
    if (cardsOpen.length === 2) {
      if (didCardsMatch(cardsOpen)) {
        setMatches([...matches, cardsOpen[0], cardsOpen[1]])
        setCardsOpen([])
        return
      }

      setTimeout(() => {
        setCardsOpen([])
      }, ONE_SECOND_MS)
    }
  }, [cardsOpen, matches, gameOver, setMatches, setCardsOpen])

  useEffect(() => {
    if (isGameStarted) {
      setShuffledDeck(shuffle(deck))
    }
  }, [isGameStarted])

  return (
    <StyledGrid className={isGameStarted ? "gradientBorder" : ""}>
      {!isGameStarted && (
        <div className="startGame">
          <StyledButton
            type="button"
            disabled={isGameStarted}
            onClick={startGame}>
            {isGameStarted ? "Game Started" : "Start Game"}
          </StyledButton>
        </div>
      )}
      {shuffledDeck.map(({ element, id }) => (
        <Card key={id} handleOpenCard={handleOpenCard} id={id}>
          {element}
        </Card>
      ))}
    </StyledGrid>
  )
}
