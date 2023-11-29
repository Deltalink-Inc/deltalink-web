import styled from "styled-components";
import { palette } from "../../../helpers/colorPalette/";

export const CreditCardContainer = styled.div`
  width: 90%;
  height: 100%;
  padding: 1rem;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;

  display: grid;
`;

export const CreditCardBox = styled.div`
  height: 15rem;

  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
`;

export const Title = styled.label`
  width: fit-content;
  padding: 0 0.6rem;

  position: relative;
  top: 0.5rem;
  left: 0.8rem;

  font-size: 0.8rem;

  color: ${palette().davysGray};
  background-color: ${palette().whiteSmoke};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 2.5rem;
  padding: 0.5rem;

  border: 1px solid ${palette().timberwolf};
  border-radius: 6px;

  outline: none;

  font-weight: 600;

  color: ${palette().davysGray};
  background-color: transparent;
`;

export const Select = styled.select`
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
  width: 100%;
  display: grid;
  grid-template-columns: 10fr 3fr;
  gap: 1rem;
`;

export const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 4fr 14fr;
  gap: 1rem;
`;

export const ThirdRow = styled.div`
  display: grid;
  grid-template-columns: 25fr 5fr;
  gap: 1rem;
`;
