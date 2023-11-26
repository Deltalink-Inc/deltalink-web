import React from "react";
import {
  PixContainer,
  PixBox,
  QrCodeContainer,
  PixQrCode,
  PixTitle,
  CodeContainer,
  CopyCodeLabel,
  CodeInput,
  CopyButton
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
            <CopyCodeLabel htmlFor="copyCode">Pix Copia e Cola</CopyCodeLabel>
            <CodeInput type="text" id="copyCode" value="GhgSPOIf23r34KffweFEF423gkgkwoSJOspovlSDLKGlk" disabled/>
            <CopyButton>Copiar Código</CopyButton>
          </CodeContainer>
        </PixBox>
      </PixContainer>
    </>
  );
}
