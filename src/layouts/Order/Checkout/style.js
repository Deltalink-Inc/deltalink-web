import styled from "styled-components";
import { palette } from "../../../helpers/ColorPalette";

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 1rem;
`;
export const PaymentMethodSelect = styled.div`
  padding: 0.6rem;

  border-radius: 6px;

  background-color: ${palette().whiteSmoke}; 
`;

export const PaymentContainerTitle = styled.h1`
  font-size: 1rem;
`;

// Select Method Payment

export const SelectMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MethodButton = styled.label`
  width: 15rem;
  height: 2.9rem;
  padding: 0 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  border: solid 1px ${palette().davysGray};
  border-radius: 6px;

`;

export const MethodTitle = styled.span``;

export const MethodIcon = styled.i``;
