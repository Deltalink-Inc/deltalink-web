import styled from "styled-components";
import { palette } from "../../helpers/Colorpalette";

export const ProductCardBody = styled.div`
  width: 15rem;
  height: 24rem;
  padding: .5rem 1rem 1rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  background-color: ${palette().absoluteWhite};
`;

export const LikeButton = styled.button`
  border: none;
  background-color: transparent;

  i {
    font-size: 1.3rem;
    opacity: 75%;
  }
`;

export const ProductImg = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const ProductName = styled.p`
  margin: 0.5rem 0;

  font-size: 0.9rem;
  font-weight: 500;
  opacity: 75%;
`;

export const PriceStyle = styled.p`
  width: 100%;
  margin-top: 0.5rem;
  padding-left: 0.3rem;

  text-align: left;

  font-size: 1.3rem;
  font-weight: 500;
  opacity: 85%;
`;
export const InstallmentsStyle = styled.p`
  width: 100%;
  margin-bottom: 0.5rem;
  padding-left: 0.3rem;

  text-align: left;

  font-size: 0.8rem;
  font-weight: 500;
  opacity: 75%;
`;
export const BuyButton = styled.button`
  width: 9rem;
  height: 2.5rem;

  border: none;
  border-radius: 8px;

  font-weight: 600;

  transition: 0.4s;

  color: ${palette().davysGray};
  background-color: ${palette().timberwolf};

  &:hover {
    color: ${palette().whiteSmoke};
    background-color: ${palette().keppel};
  }
`;
