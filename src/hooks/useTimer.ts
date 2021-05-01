import { useEffect, useRef, useState } from "react"
import { Format, getTimeLeft } from "utils/getTimeLeft"
import { ONE_SECOND_MS } from "../constants"
import { useInterval } from "./useInterval"

export const useTimer = (
  date: number | undefined = 0,
  format: Format = "mm:ss",
) => {
  const [timeElapsed, setTimeElapsed] = useState(getTimeLeft(date, "mm:ss"))
  const startTime = useRef(Date.now())

  const timer = () => {
    const time = Date.now() + date - startTime.current
    setTimeElapsed(getTimeLeft(time, format))
  }

  useEffect(() => {
    startTime.current = Date.now()
    return () => {}
  }, [date])

  useInterval(timer, ONE_SECOND_MS)

  return [timeElapsed]
}
