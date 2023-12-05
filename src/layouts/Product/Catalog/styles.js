import styled from "styled-components";
import { palette } from "../../../helpers/Colorpalette";

export const MainContainer = styled.div`
  max-width: 100vw;
  height: auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.5rem;

  opacity: 75%;
  color: ${palette().night};
`

export const CardContainer = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`