import styled from "styled-components"

export const StyledLeaderboardModal = styled.section`
  position: fixed;
  width: 90%;
  height: 25rem;
  left: 5%;
  top: calc(50% - 12.5rem);
  max-width: 70rem;
  z-index: 1;
  background: var(--color-violet-dark);

  h3 {
    text-align: center;
    margin: 0 auto;
  }
  button {
    margin-left: auto;
    display: block;
    font-size: var(--font-xl);
    font-weight: bold;
    font-family: var(--heading-font);
    padding: 0.66rem 1.25rem;
    background: var(--color-violet-light);
  }
`
