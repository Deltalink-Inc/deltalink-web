import styled from "styled-components";
import { palette } from "../../helpers/Colorpalette";

export const Header = styled.header`
  max-width: 100vw;
  max-height: 8em;
  padding: 1rem 0 0.5rem 0;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;

  background-color: ${palette().keppel};
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 3.2rem;
  cursor: pointer;
  opacity: 95%;
`;

export const DeltaLinkTitle = styled.h1`
  font-size: 1.2rem;
  cursor: pointer;
  color: ${palette().whiteSmoke};
  opacity: 100%;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const SearchInputBox = styled.div`
  width: 38rem;
  height: 2.5rem;
  padding-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background-color: ${palette().whiteSmoke};
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 1.5rem;

  font-weight: 600;

  border: none;
  border-right: 1px solid ${palette().timberwolf};
  outline: none;
  color: ${palette().davysGray};
  background-color: transparent;

  &::selection {
    color: ${palette().davysGray};
    background-color: ${palette().timberwolf};
    opacity: 50%;
  }

  &::placeholder {
    font-weight: 600;
    color: ${palette().platina};
  }
`;

export const SearchButton = styled.button`
  width: 2.5rem;
  height: 100%;

  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  outline: none;
  color: ${palette().davysGray};
  background-color: transparent;

  cursor: pointer;

  &:hover {
    background-color: ${palette().timberwolf};
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  list-style: none;
`;
export const CategoryItem = styled.li`
  button {
    color: ${palette().whiteSmoke};

    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;

    cursor: pointer;

    transition: 0.2s;

    opacity: 85%;

    border: none;
    background-color: transparent;

    &:hover {
      opacity: 100%;
    }
  }
`;
export const ProfileList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  list-style: none;
`;
export const ProfileItem = styled.li`
  button {
    color: ${palette().whiteSmoke};

    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;

    cursor: pointer;

    transition: 0.2s;

    opacity: 85%;

    border: none;
    background-color: transparent;

    &:hover {
      opacity: 100%;
    }
  }
`;
export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1.5rem;
`;
