import styled from "styled-components"

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 1px;

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
    animation: animatedgradient 10s ease alternate infinite;
    background-size: 300% 300%;
  }

  @keyframes animatedgradient {
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
`
