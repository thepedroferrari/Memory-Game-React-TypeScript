import styled from "styled-components"

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  width: fit-content;
  img {
    object-fit: cover;
  }
`
