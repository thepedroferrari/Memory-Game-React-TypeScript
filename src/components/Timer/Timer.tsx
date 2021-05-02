import { TimerIcon } from "components/Icons/TimerIcon"
import { trackedGameStore } from "gameStore"
import { useTimer } from "hooks"
import { useEffect } from "react"
import { StyledTimer } from "./Styled.Timer"

export const Timer = () => {
  const [{ seconds }] = useTimer(0, "s")
  const { setClock } = trackedGameStore()

  useEffect(() => {
    setClock(Number(seconds))
  }, [setClock, seconds])

  return (
    <StyledTimer>
      <i>{TimerIcon()}</i> <span>{seconds}s.</span>
    </StyledTimer>
  )
}
