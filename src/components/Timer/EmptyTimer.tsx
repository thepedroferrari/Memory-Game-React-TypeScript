import { TimerIcon } from "components/Icons/TimerIcon"
import { StyledTimer } from "./Styled.Timer"

export const EmptyTimer = () => (
  <StyledTimer>
    <i>{TimerIcon()}</i> <span>0s.</span>
  </StyledTimer>
)
