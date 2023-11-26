import styled from "styled-components";
import { palette } from "../../helpers/ColorPalette";

export const MainContainer = styled.div`
  margin-top: 1rem; 
  padding-top: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  border-top: 1px solid ${palette().timberwolf};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 2rem;
  opacity: 75%;
  color: ${palette().davysGray};
`;

export const Title = styled.h1`
  font-size: 1rem;
  opacity: 75%;
  color: ${palette().davysGray};
`;

export const Details = styled.p`
  width: 15rem;

  font-size: 0.8rem;
  text-align: center;

  opacity: 75%;
  color: ${palette().davysGray};
`;
