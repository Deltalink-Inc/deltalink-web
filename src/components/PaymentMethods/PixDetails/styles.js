import styled from "styled-components";
import { palette } from "../../../helpers/colorPalette/";

export const PixContainer = styled.div`
  height: 100%;

  display: grid;
`;

export const PixBox = styled.div`
  height: 15rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`

export const QrCodeContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const PixQrCode = styled.img`
  width: 8rem;
  padding: 0.15rem;
  margin: 0.5rem;

  border: 0.2rem solid ${palette().davysGray};
  border-radius: 6px;
`;

export const PixTitle = styled.p`
  width: 11rem;

  text-align: center;
  font-size: 0.8rem;

  color: ${palette().davysGray};
`;

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CopyCodeLabel = styled.label`
  position: relative;
  left: 0.8rem;
  bottom: 0.3rem;

  font-size: 0.8rem;
  font-weight: 500;

  opacity: 60%;
  color: ${palette().davysGray};
  background-color: ${palette().whiteSmoke};
`;

export const CodeInput = styled.input`
  width: 18rem;
  height: 2.5rem;
  padding: 0.5rem;

  border: 1px solid ${palette().timberwolf};
  border-radius: 6px;

  outline: none;

  font-weight: 600;

  opacity: 60%;
  color: ${palette().davysGray};
  background-color: transparent;
`;

export const CopyButton = styled.button`
  width: 14rem;
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  transition: .4s;

  color: ${palette().whiteSmoke};
  background-color: ${palette().keppel};

  &:hover{
    opacity: 60%;
  }

`;
