import styled from "styled-components";
import { palette } from "../../../helpers/colorPalette/";

export const Header = styled.header`
  width: 100%;
  height: 2.5rem;
  padding: 0 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${palette().keppel};
`;

export const Container = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  background-color: white;
`;

export const BackButton = styled.button`
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  border: none;

  outline: none;

  font-weight: 500;

  transition: 0.2s;

  color: ${palette().whiteSmoke};
  background-color: transparent;

  &:hover {
    opacity: 50%;
  }
`;

export const Logo = styled.img`
  height: 1.5rem;
`;

export const Title = styled.h1`
  position: relative;
  bottom: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;

  opacity: 70%;
  color: ${palette().night};
`;
export const Description = styled.div`
  width: 30rem;

  position: relative;
  bottom: 8rem;

  text-align: center;

  font-weight: 500;

  opacity: 60%;
  color: ${palette().night};
`;

export const Button = styled.button`
  width: content-fit;
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

  >i {
    margin-right: 0.6rem;
  }

`;

export const Footer = styled.footer`
  > p {
    font-size: 0.8rem;
    font-weight: 500;

    opacity: 60%;
    color: ${palette().night};
  }
`;
