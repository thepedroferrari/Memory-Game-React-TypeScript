import styled from "styled-components"

export const StyledLeaderboard = styled.ul`
  padding: 1rem;
  width: 100%;
  color: var(--color-white);
  background: var(--color-violet-light);

  ul {
    padding: 0.25rem;
  }
  ul:nth-child(odd) {
    background: var(--color-violet);
  }

  li {
    display: grid;
    padding: 0;

    column-gap: 1rem;
    row-gap: 0.33rem;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
  }

  span:nth-child(4n) {
    text-align: right;
  }
`
