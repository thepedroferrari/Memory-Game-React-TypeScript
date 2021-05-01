import { Deck } from "components/CardsGrid"

export const getCardId = (id: Deck["id"]) => id.split("-")[0]
