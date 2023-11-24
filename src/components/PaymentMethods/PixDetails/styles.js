import styled from "styled-components";
import { palette } from "../../../helpers/colorPalette/";

export const PixContainer = styled.div`
    padding: 1rem;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 6px;

    background-color: ${palette().whiteSmoke};
`

export const PixBox = styled.div`
    padding: 0 8rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;

`

export const QrCodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PixQrCode = styled.img`
    width: 8.8rem;

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

    opacity: 50%;
    color: ${palette().night};
`

export const CopyCodeLabel = styled.label`
    font-size: .9rem;
    font-weight: 500;

    opacity: 50%;
    color: ${palette().night};
`

export const CodeInput = styled.input`
    width: 14rem;
    height: 2.3rem;    
    margin-top: .5rem;
    margin-bottom: .8rem;
    padding: .5rem;
    
    border: none;
    border-radius: 6px;

    font-weight: 500;

    color: ${palette().davysGray};
    background-color: ${palette().timberwolf};
`

export const CopyButton = styled.button`
    padding: .5rem 1rem;    

    border: none;
    border-radius: 6px;

    cursor: pointer;

    transition: .4s;

    font-weight: 500;

    color: ${palette().whiteSmoke};
    background-color: ${palette().keppel};

    &:hover {
        opacity: 75%;
    }
`