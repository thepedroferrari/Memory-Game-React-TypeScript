import { Deck } from "components/CardsGrid/CardsGrid"
import { FC } from "react"
import avalancheLogoImg from "../../images/AvalancheLogo.jpg"

type Props = {
  handleOpenCard: (id: Deck["id"]) => void
  cardsOpen: Deck["id"][]
  id: Deck["id"]
  matches: Deck["id"][]
}
export const Card: FC<Props> = ({
  handleOpenCard,
  cardsOpen,
  id,
  children,
  matches,
}) => {
  const shouldShowCard = matches.includes(id) || cardsOpen.includes(id)
  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div onClick={() => (shouldShowCard ? {} : handleOpenCard(id))}>
      {shouldShowCard ? (
        children
      ) : (
        <img src={avalancheLogoImg} alt="Card Back" />
      )}
    </div>
  )
}
