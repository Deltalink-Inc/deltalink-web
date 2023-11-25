import styled from "styled-components";
import { palette } from "../../../helpers/colorPalette/";

export const Container = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 4fr 1fr;

  background-color: ${palette().whiteSmoke};
`;

export const MainContainer = styled.div``;

export const AddressBox = styled.div``;

export const AddressTitle = styled.h1``;

export const PaymentContainer = styled.div``;

export const PaymentMethodSelect = styled.div``;

export const PaymentContainerTitle = styled.h1``;

// Select Method Payment

export const SelectMethodContainer = styled.div``;

export const MethodButton = styled.label`
`;

export const MethodTitle = styled.span``;

export const MethodIcon = styled.i``;
