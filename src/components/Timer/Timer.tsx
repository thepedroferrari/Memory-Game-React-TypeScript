import { TimerIcon } from "components/Icons/TimerIcon"
import { Timeleft } from "utils/getTimeLeft"

type Props = {
  minutes: Timeleft["minutes"]
  seconds: Timeleft["seconds"]
}

export const Timer = ({ minutes, seconds }: Props) => {
  return (
    <div className="subheader">
      <time>
        {TimerIcon} {minutes}:{seconds}
      </time>
    </div>
  )
}
