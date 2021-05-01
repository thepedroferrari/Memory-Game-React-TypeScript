import styled from "styled-components"

export const StyledGameWrapper = styled.div`
  display: grid;
  grid-template-areas: "header" "game" "leaderboard";
  max-width: 75rem;

  place-content: center;
  place-items: center;
  place-self: center;
  min-height: 100vh;
  max-height: 100vh;
`
