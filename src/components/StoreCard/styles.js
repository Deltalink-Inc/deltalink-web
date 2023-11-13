import styled from "styled-components";
import { palette } from "../../helpers/ColorPalette";

const Palette = palette();

export const CardBody = styled.div`
  width: 9rem;
  height: 12rem;
  padding: 0.6rem;
  margin: 1rem;
  margin-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.2rem;

  text-align: left;

  border-radius: 6px;

  background-color: ${Palette.platinum2};

  #storeName,
  #storeDescription,
  #storeCategory {
    color: ${Palette.davysGray};
  }
  #storeLogo {
    width: 100%;
    height: 5rem;

    border-radius: 6px;
    object-fit: cover;
  }
  #storeName {
    margin-top: 0.3rem;

    font-size: 0.8rem;
    font-weight: 600;
  }
  #storeDescription {
    max-height: 3rem;
    font-size: 0.7rem;
    opacity: 85%;
  }
  #storeCategory {
    text-align: right;
    font-size: 0.6rem;
    font-weight: 600;
    opacity: 75%;
  }
`;
