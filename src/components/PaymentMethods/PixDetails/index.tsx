import React from "react";
import {
  PixContainer,
  PixBox,
  QrCodeContainer,
  PixQrCode,
  PixTitle,
  CodeContainer,
} from "./styles";

export function PixDetails() {
  return (
    <>
      <PixContainer>
        <PixBox>
          <QrCodeContainer>
            <PixQrCode src="/pixqrcode.svg" alt="" />
            <PixTitle>
              Escanei o <strong>QR CODE</strong> acima no seu App do banco ou
              copie o código
            </PixTitle>
          </QrCodeContainer>
          <CodeContainer>
            <label htmlFor="copyCode">Código Copia e Cola</label>
            <input type="text" id="copyCode" value="" disabled/>
            <button>Copiar Código</button>
          </CodeContainer>
        </PixBox>
      </PixContainer>
    </>
  );
}
