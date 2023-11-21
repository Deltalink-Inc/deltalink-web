import styled from "styled-components";
import { palette } from "../../../helpers/ColorPalette";

export const Palette = palette();
export const SelectMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MethodButton = styled.label`
  width: 15rem;
  height: 3rem;
  padding: 0 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  border: solid 1px ${Palette.davysGray};
  border-radius: 6px;

`;

export const MethodTitle = styled.span``;

export const MethodIcon = styled.i``;
