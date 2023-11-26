import styled from "styled-components";
import { palette } from "../../../helpers/colorPalette/";

export const Container = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 4fr 1fr;

  background-color: ${palette().whiteSmoke};
`;

export const MainContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 1rem;

`;

export const AddressBox = styled.div`
  border-bottom: 1px dashed ${palette().timberwolf};
`;

export const Title = styled.h1`
  position: relative;
  top: 0.5rem;
  left: 0.5rem;

  font-size: 0.9rem;

  opacity: 50%;
  color: ${palette().night};
`;

export const PaymentContainer = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 3fr 7fr;
`;

export const PaymentMethodSelect = styled.div`

`;

// Select Method Payment

export const SelectMethodContainer = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  background-color: blue;
`;

export const MethodButton = styled.label``;

export const MethodTitle = styled.span``;

export const MethodIcon = styled.i``;
