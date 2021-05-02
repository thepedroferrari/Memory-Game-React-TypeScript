import styled from "styled-components"

type Props = {
  className?: string
}
export const StyledGrid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 50rem;
  gap: 2px;
  margin: 1rem;

  picture {
    line-height: 0;
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  --border-width: 5px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    height: calc(100% + var(--border-width) * 2);
    width: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: var(--border-radius);
    z-index: -1;
    animation: gradient 3s ease alternate infinite;
    background-size: 300% 300%;
    filter: grayscale(0.8);
  }

  &.gradient-border:after {
    filter: grayscale(0);
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .startGame {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    button {
      margin-top: calc(50% - var(--font-xl) / 1.25);
      font-size: var(--font-xl);
    }
  }
`
