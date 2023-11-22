import styled from "styled-components";
import { palette } from "../../../helpers/ColorPalette";

export const PixContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 6px;

    background-color: ${palette().whiteSmoke};
`

export const PixBox = styled.div`
    padding: 0 10rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
`

export const QrCodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PixQrCode = styled.img`
    width: 8rem;

    border: solid .4rem ${palette().davysGray};
    border-radius: 6px;
`

export const CodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

` 

export const PixTitle = styled.p`
    width: 10.5rem;
    margin-top: .5rem;

    font-size: .8rem;
    font-weight: 400;
    text-align: center;

    opacity: 60%;
`