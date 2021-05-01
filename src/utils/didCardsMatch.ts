import { Deck } from "components/CardsGrid"
import { getCardId } from "./getCardId"

export const didCardsMatch = (cards: Deck["id"][]) => {
  const [card1, card2] = cards

  return getCardId(card1) === getCardId(card2)
}
