import styled from "styled-components";
import { palette } from "../../../helpers/ColorPalette";

const Palette = palette();

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
`;
export const PaymentMethodSelect = styled.div`
  padding: 0.6rem;

  border-radius: 6px;

  background-color: ${Palette.whiteSmoke}; 
`;

export const PaymentContainerTitle = styled.h1`
  font-size: 1rem;
`;
