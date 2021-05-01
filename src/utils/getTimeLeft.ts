import {
  ONE_DAY_MS,
  ONE_HOUR_MS,
  ONE_MINUTE_MS,
  ONE_SECOND_MS,
} from "../constants"
import { prefixTime } from "./prefixTime"

export type Timeleft = Record<"hours" | "minutes" | "seconds", string | null>
export type Format = "s" | "mm:ss"

// https://www.measurethat.net/Benchmarks/Show/1106/0/mathfloor-vs
const getDays = (time: number) => ~~(time / ONE_DAY_MS)
const getHours = (time: number) => ~~((time / ONE_HOUR_MS) % 24)
const getMinutes = (time: number) => ~~((time / ONE_MINUTE_MS) % 60)
const getSeconds = (time: number) => ~~((time / ONE_SECOND_MS) % 60)

export const getTimeLeft = (date = 0, format: Format = "mm:ss"): Timeleft => {
  let timeLeft: Timeleft = {
    hours: null,
    minutes: null,
    seconds: null,
  }

  if (format === "mm:ss") {
    timeLeft = {
      hours: "00",
      minutes: prefixTime(
        getMinutes(date) + getHours(date) * 60 + getDays(date) * 24 * 60,
      ),
      seconds: prefixTime(getSeconds(date)),
    }
  }

  if (format === "s") {
    timeLeft = {
      hours: "0",
      minutes: "0",
      seconds: `${~~(date / ONE_SECOND_MS)}`,
    }
  }

  return timeLeft
}
