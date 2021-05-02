import styled from "styled-components"

export const StyledGameWrapper = styled.div`
  display: grid;
  grid-template-areas: "header" "game" "leaderboard";
  max-width: 75rem;

  place-content: center;
  place-items: center;
  place-self: center;

  header {
    width: 100%;
  }

  .controls {
    display: grid;
    justify-self: end;
    grid-auto-flow: column;
    grid-template-columns: 1fr max-content;
    width: 100%;
    align-items: center;
    time {
      margin-top: -10px;
    }
  }
`
