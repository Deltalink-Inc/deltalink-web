import styled from "styled-components";
import { palette } from "../../../helpers/Colorpalette";

export const AddressContainer = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: .8rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoAddressLabel = styled.label`
  width: fit-content;
  padding: 0 0.6rem;

  position: relative;
  top: 0.5rem;
  left: 0.8rem;

  font-size: 0.8rem;

  color: ${palette().davysGray};
  background-color: ${palette().whiteSmoke};
`;

export const InfoAddressInput = styled.input`
  height: 2.5rem;
  padding: 0.5rem;

  border: 1px solid ${palette().timberwolf};
  border-radius: 6px;

  outline: none;

  font-weight: 600;

  color: ${palette().davysGray};
  background-color: transparent;
`;

// ROWS

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 10fr 8fr 4fr;
  gap: 1rem;
`;

export const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 8fr 10fr 4fr;
  gap: 1rem;
`;

export const ThirdRow = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr 10fr;
  gap: 1rem;
`;
