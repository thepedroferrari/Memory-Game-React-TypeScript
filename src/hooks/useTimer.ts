import { useEffect, useRef, useState } from "react"
import { Format, getTimeLeft } from "utils/getTimeLeft"
import { ONE_SECOND_MS } from "../constants"
import { useInterval } from "./useInterval"

export const useTimer = (
  date: number | null | undefined,
  format: Format = "mm:ss",
) => {
  const [timeElapsed, setTimeElapsed] = useState(getTimeLeft(date, "mm:ss"))
  const startTime = useRef(Date.now())

  const timer = () => {
    const time = date ? Date.now() + date - startTime.current : null
    setTimeElapsed(getTimeLeft(time, format))
  }

  useEffect(() => {
    startTime.current = Date.now()
  }, [date])

  useInterval(timer, ONE_SECOND_MS)

  const didNotStart =
    timeElapsed.minutes === "00" &&
    (timeElapsed.seconds === "00" || timeElapsed.seconds === null)

  return { timeElapsed, didNotStart }
}
