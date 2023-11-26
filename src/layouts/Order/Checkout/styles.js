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

export const PaymentMethodSelect = styled.div``;

// Select Method Payment

export const SelectMethodContainer = styled.div`
  margin-top: 1rem;
  padding-left: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  border-right: 1px solid ${palette().timberwolf};
`;

export const MethodButton = styled.label`
  width: 15rem;
  height: 3rem;
  padding: 0.5rem;
  padding-left: 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid ${palette().timberwolf};
  border-radius: 6px;
`;

export const MethodTitle = styled.span`
  color: ${palette().davysGray};
`;

export const MethodIcon = styled.i`
  color: ${palette().davysGray};
`;

// Resume Order

export const ResumeOrderContainer = styled.div`
  height: fit-content;
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;

  display: flex;
  flex-direction: column;

  border: 2px solid ${palette().timberwolf};
  border-radius: 6px;
`;

export const ResumeOrderTitle = styled.h2`
  margin: 0.5rem 0;

  font-size: 1rem;

  opacity: 50%;
  color: ${palette().night};
`;

export const ProductName = styled.p`
  margin: 0.2rem 0;

  font-size: 0.9rem;
  font-weight: 500;

  opacity: 60%;
  color: ${palette().night};
`;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TableData = styled.td`
  margin: 0.2rem 0;

  font-size: 0.9rem;
  font-weight: 500;

  opacity: 60%;
  color: ${palette().night};
`;

export const ConfirmButton = styled.button`
  margin-top: 0.6rem;
  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  transition: .4s;

  color: ${palette().whiteSmoke};
  background-color: ${palette().keppel};

  &:hover {
    opacity:60%;
  }
`;

export const HorizontalRule = styled.hr`
  opacity: 50%;
`;
