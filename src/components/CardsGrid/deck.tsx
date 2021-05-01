import genZ from "../../images/GenZ.jpg"
import justCause3 from "../../images/JustCause3.jpg"
import justCause4 from "../../images/JustCause4.jpg"
import madMax from "../../images/MadMax.jpg"
import rage2 from "../../images/Rage2.jpg"
import secondExtinction from "../../images/SecondExtinction.jpg"
import theHunter from "../../images/theHunter.jpg"
import theHunter2 from "../../images/TheHunter2.jpg"

export type Deck = {
  element: JSX.Element
  id: string
}

export const deck: Deck[] = [
  {
    element: <img draggable="false" src={genZ} alt={genZ} />,
    id: "genZ-card1",
  },
  {
    element: <img draggable="false" src={justCause3} alt={justCause3} />,
    id: "justCause3-card1",
  },
  {
    element: <img draggable="false" src={justCause4} alt={justCause4} />,
    id: "justCause4-card1",
  },
  {
    element: <img draggable="false" src={madMax} alt={madMax} />,
    id: "madMax-card1",
  },
  {
    element: <img draggable="false" src={rage2} alt={rage2} />,
    id: "rage2-card1",
  },
  {
    element: (
      <img draggable="false" src={secondExtinction} alt={secondExtinction} />
    ),
    id: "secondExtinction-card1",
  },
  {
    element: <img draggable="false" src={theHunter} alt={theHunter} />,
    id: "theHunter-card1",
  },
  {
    element: <img draggable="false" src={theHunter2} alt={theHunter2} />,
    id: "theHunter2-card1",
  },

  {
    element: <img draggable="false" src={genZ} alt={genZ} />,
    id: "genZ-card2",
  },
  {
    element: <img draggable="false" src={justCause3} alt={justCause3} />,
    id: "justCause3-card2",
  },
  {
    element: <img draggable="false" src={justCause4} alt={justCause4} />,
    id: "justCause4-card2",
  },
  {
    element: <img draggable="false" src={madMax} alt={madMax} />,
    id: "madMax-card2",
  },
  {
    element: <img draggable="false" src={rage2} alt={rage2} />,
    id: "rage2-card2",
  },
  {
    element: (
      <img draggable="false" src={secondExtinction} alt={secondExtinction} />
    ),
    id: "secondExtinction-card2",
  },
  {
    element: <img draggable="false" src={theHunter} alt={theHunter} />,
    id: "theHunter-card2",
  },
  {
    element: <img draggable="false" src={theHunter2} alt={theHunter2} />,
    id: "theHunter2-card2",
  },
]
