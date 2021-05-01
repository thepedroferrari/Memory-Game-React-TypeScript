import styled from "styled-components"

export const StyledGameOver = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  div {
    position: absolute;
    width: 320px;
    border-radius: calc(var(--border-radius) * 2);
    height: fit-content;
    left: calc(50% - 160px);
    top: calc(40% - 160px);
    background-color: var(--color-violet-dark);
    padding: 1.5rem 1rem 0.5rem;
    box-shadow: 0 0 30px 6px var(--color-violet-lightest);
  }
  h4 {
    font-size: var(--font-lg);
    text-align: center;
    & + p {
      text-align: center;
    }
  }

  label {
    margin: 1rem 0 2rem 0;
    display: block;
    font-weight: 800;
    text-align: center;
    p {
      margin-bottom: 0.25rem;
    }
  }

  input {
    border: var(--border-width) solid var(--color-violet-darker);
    box-shadow: inset 0 0 6px 1px var(--color-violet-darkest);
    border-radius: var(--border-radius);
    background-color: var(--color-violet-darker);
    padding: 0.5rem;
    color: var(--color-white);
    text-shadow: 2px 2px 3px var(--color-violet-lighter);
    &::placeholder {
      color: var(--color-violet-lightest);
    }
  }
`
