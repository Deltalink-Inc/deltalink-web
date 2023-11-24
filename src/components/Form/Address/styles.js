import styled from "styled-components";
import { palette } from "../../../helpers/Colorpalette";

export const AddressContainer = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: .6rem;

  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoAddressLabel = styled.label`
    margin-left: .5rem;

  font-size: 0.9rem;
  font-weight: 500;

  opacity: 50%;
  color: ${palette().night};
`;

export const InfoAddressInput = styled.input`
  height: 2.5rem;
  padding: 1rem;

  border: none;
  border-radius: 6px;

  outline: none;

  font-weight: 500;

  color: ${palette().davysGray};
  background-color: ${palette().timberwolf};
`;

// ROWS

export const FirstRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1.8fr .2fr;
  gap: 1rem;
`;

export const SecondRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr 0.1fr;
  gap: 1rem;
`;

export const ThirdRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: .5fr .8fr 1fr;
  gap: 1rem;
`;
