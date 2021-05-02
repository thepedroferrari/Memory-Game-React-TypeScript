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

  & > li:first-child {
    & > span:first-child {
      margin-left: 1rem;
    }
  }

  li {
    display: grid;
    padding: 0;

    column-gap: 1rem;
    row-gap: 0.33rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    list-style: none;
  }

  span:nth-child(4n),
  span:nth-child(4n -1) {
    text-align: right;
  }
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
