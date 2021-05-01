import styled from "styled-components"

export const StyledButton = styled.button`
  display: flex;
  font-size: var(--font-lg);
  padding: 0.33rem 0.75rem;
  border: var(--border-width) solid var(--color-violet-lighter);
  background-color: var(--color-violet);
  color: var(--color-white);
  margin: 1rem auto;
  text-align: center;
  font-family: var(--font-heading);
  border-radius: var(--border-radius);
  box-shadow: 0 0 5px 1px var(--color-violet-lighter);
  transition: box-shadow 300ms;

  &:hover {
    box-shadow: 0 0 15px 3px var(--color-violet-lighter);
  }
`
