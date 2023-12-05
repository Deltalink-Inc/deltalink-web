import styled from "styled-components";
import { palette } from "../../../helpers/colorPalette/";

export const Container = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 4fr 1fr;

  background-color: ${palette().whiteSmoke};
`;

export const Header = styled.header`
  width: 100%;
  height: 2.5rem;
  padding: 0 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${palette().keppel};
`;

export const BackButton = styled.button`
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  border: none;

  outline: none;

  font-weight: 500;

  transition: .2s;

  color: ${palette().whiteSmoke};
  background-color: transparent;

  &:hover {
    opacity: 50%; 
  }

`;

export const Logo = styled.img`
  height: 1.5rem;
`;

// Address Form

export const AddressBox = styled.div`
  padding: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;

  display: flex;
  flex-direction: column;

  border-left: 1px dashed ${palette().timberwolf};
  border-right: 1px dashed ${palette().timberwolf};
`;

export const AddressHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  position: relative;
  top: 0.5rem;
  left: 0.5rem;

  font-size: 1rem;

  opacity: 50%;
  color: ${palette().night};
`;

export const Title = styled.h1`
  position: relative;
  top: 0.7rem;
  left: 1.2rem;

  font-size: 1rem;

  opacity: 50%;
  color: ${palette().night};
`;

// Resume Order

export const ResumeOrderContainer = styled.div`
  height: 95%;
  margin: 1rem;
  padding: 0 1rem 0 1rem;

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
  width: 100%;
  margin-top: auto;
  margin-bottom: 1rem;
  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  transition: 0.4s;

  color: ${palette().whiteSmoke};
  background-color: ${palette().keppel};

  &:hover {
    opacity: 60%;
  }
`;

export const HorizontalRule = styled.hr`
  opacity: 50%;
`;
