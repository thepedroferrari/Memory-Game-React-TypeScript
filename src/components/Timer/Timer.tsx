import { TimerIcon } from "components/Icons/TimerIcon"
import { trackedGameStore } from "gameStore"
import { useTimer } from "hooks"
import { useEffect } from "react"

export const Timer = () => {
  const [{ seconds }] = useTimer(0, "s")
  const { setClock } = trackedGameStore()

  useEffect(() => {
    setClock(Number(seconds))
    console.log(seconds)
  }, [setClock, seconds])

  return (
    <div className="subheader">
      <time>
        {TimerIcon} {seconds}
      </time>
    </div>
  )
}
