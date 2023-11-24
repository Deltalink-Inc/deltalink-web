import styled from "styled-components";
import { palette } from "../../../helpers/colorPalette/";

export const MainContainer = styled.div`
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const AddressBox = styled.div`
  border-radius: 6px;

  background-color: ${palette().whiteSmoke};
`;

export const AddressTitle = styled.h1`
  margin-top: .3rem;
  margin-left: 1rem;

  font-size: 1.1rem;
  font-weight: 500;

  opacity: 75%;

  color: ${palette().night};
`;

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 1rem;
`;
export const PaymentMethodSelect = styled.div`
  padding: 1.2rem;

  border-radius: 6px;

  background-color: ${palette().whiteSmoke};
`;

export const PaymentContainerTitle = styled.h1`
  margin-bottom: 1rem;

  font-size: 1rem;
  font-weight: 500;

  opacity: 75%;

  color: ${palette().night};
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
