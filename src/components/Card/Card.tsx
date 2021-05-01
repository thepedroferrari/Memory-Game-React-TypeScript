import { Deck } from "components/CardsGrid"
import { trackedGameStore } from "gameStore"
import { FC } from "react"
import avalancheLogoImg from "../../images/AvalancheLogo.jpg"

type Props = {
  handleOpenCard: (id: Deck["id"]) => void
  id: Deck["id"]
}
export const Card: FC<Props> = ({ handleOpenCard, id, children }) => {
  const { cardsOpen, matches } = trackedGameStore()
  const shouldShowCard = matches.includes(id) || cardsOpen.includes(id)
  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <picture onClick={() => (shouldShowCard ? {} : handleOpenCard(id))}>
      {shouldShowCard ? (
        children
      ) : (
        <img draggable="false" src={avalancheLogoImg} alt="Card Back" />
      )}
    </picture>
  )
}
