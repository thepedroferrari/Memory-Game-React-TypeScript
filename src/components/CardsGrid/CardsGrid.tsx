import { Card } from "components/Card/Card"
import shuffle from "lodash.shuffle"
import { useEffect, useRef, useState } from "react"
import { ONE_SECOND_MS } from "../../constants"
import genZ from "../../images/GenZ.jpg"
import justCause3 from "../../images/JustCause3.jpg"
import justCause4 from "../../images/JustCause4.jpg"
import madMax from "../../images/MadMax.jpg"
import rage2 from "../../images/Rage2.jpg"
import secondExtinction from "../../images/SecondExtinction.jpg"
import theHunter from "../../images/theHunter.jpg"
import theHunter2 from "../../images/TheHunter2.jpg"
import { StyledGrid } from "./StyledGrid"

export type Deck = {
  element: JSX.Element
  id: string
}
const deck: Deck[] = [
  { element: <img src={genZ} alt={genZ} />, id: "genZ-card1" },
  {
    element: <img src={justCause3} alt={justCause3} />,
    id: "justCause3-card1",
  },
  {
    element: <img src={justCause4} alt={justCause4} />,
    id: "justCause4-card1",
  },
  { element: <img src={madMax} alt={madMax} />, id: "madMax-card1" },
  { element: <img src={rage2} alt={rage2} />, id: "rage2-card1" },
  {
    element: <img src={secondExtinction} alt={secondExtinction} />,
    id: "secondExtinction-card1",
  },
  { element: <img src={theHunter} alt={theHunter} />, id: "theHunter-card1" },
  {
    element: <img src={theHunter2} alt={theHunter2} />,
    id: "theHunter2-card1",
  },

  { element: <img src={genZ} alt={genZ} />, id: "genZ-card2" },
  {
    element: <img src={justCause3} alt={justCause3} />,
    id: "justCause3-card2",
  },
  {
    element: <img src={justCause4} alt={justCause4} />,
    id: "justCause4-card2",
  },
  { element: <img src={madMax} alt={madMax} />, id: "madMax-card2" },
  { element: <img src={rage2} alt={rage2} />, id: "rage2-card2" },
  {
    element: <img src={secondExtinction} alt={secondExtinction} />,
    id: "secondExtinction-card2",
  },
  { element: <img src={theHunter} alt={theHunter} />, id: "theHunter-card2" },
  {
    element: <img src={theHunter2} alt={theHunter2} />,
    id: "theHunter2-card2",
  },
]

export const CardsGrid = () => {
  const [cardsOpen, setCardsOpen] = useState<Deck["id"][]>([])
  const [matches, setMatches] = useState<Deck["id"][]>([])
  const suffledDeck = useRef(shuffle(deck))

  const handleOpenCard = (id: Deck["id"]) => {
    console.log(cardsOpen.length)
    if (cardsOpen.length === 2) {
      // Check if they have the same id, if they do push to matches.
      return
    }
    setCardsOpen((prev) => [...prev, id])
  }

  useEffect(() => {
    if (cardsOpen.length === 2) {
      const [card1, card2] = cardsOpen
      console.log(
        card1,
        card2,
        card1.split("-")[0],
        card2.split("-")[0],
        card1.split("-")[0] === card2.split("-")[0],
      )
      if (card1.split("-")[0] === card2.split("-")[0]) {
        console.log(matches)
        setMatches((prev) => [...prev, card1, card2])
        setCardsOpen([])
        return
      }

      setTimeout(() => {
        setCardsOpen([])
      }, ONE_SECOND_MS)
    }
  }, [cardsOpen, matches])

  return (
    <StyledGrid>
      {suffledDeck.current.map(({ element, id }) => (
        <Card
          key={id}
          handleOpenCard={handleOpenCard}
          cardsOpen={cardsOpen}
          id={id}
          matches={matches}>
          {element}
        </Card>
      ))}
    </StyledGrid>
  )
}
