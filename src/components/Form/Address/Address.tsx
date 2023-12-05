import React from "react";
import {
  AddressContainer,
  InputContainer,
  InfoAddressLabel,
  InfoAddressInput,
  FirstRow,
  SecondRow,
  ThirdRow,
} from "./styles";

export function AddressForm() {
  return (
    <>
      <AddressContainer>
        <FirstRow>
          <InputContainer>
            <InfoAddressLabel htmlFor="fullName">
              Nome do Destinatario*
            </InfoAddressLabel>
            <InfoAddressInput type="text" id="fullName" required value="Pedro Soares"/>
          </InputContainer>
          <InputContainer>
            <InfoAddressLabel htmlFor="street">Logradouro*</InfoAddressLabel>
            <InfoAddressInput type="text" id="street" required value="Rua João Pinheiro"/>
          </InputContainer>
          <InputContainer>
            <InfoAddressLabel htmlFor="houseNumber">Nº*</InfoAddressLabel>
            <InfoAddressInput type="text" id="houseNumber" required value="895"/>
          </InputContainer>
        </FirstRow>
        <SecondRow>
          <InputContainer>
            <InfoAddressLabel htmlFor="neighborhood">Bairro*</InfoAddressLabel>
            <InfoAddressInput type="text" id="neighborhood" required value="Santa Efigênia"/>
          </InputContainer>
          <InputContainer>
            <InfoAddressLabel htmlFor="city">Cidade*</InfoAddressLabel>
            <InfoAddressInput type="text" id="city" required value="Itabirito"/>
          </InputContainer>
          <InputContainer>
            <InfoAddressLabel htmlFor="state">UF*</InfoAddressLabel>
            <InfoAddressInput type="text" id="state" required value="MG"/>
          </InputContainer>
        </SecondRow>
        <ThirdRow>
        <InputContainer>
          <InfoAddressLabel htmlFor="zipCode">CEP*</InfoAddressLabel>
          <InfoAddressInput type="text" id="zipCode" required value="35450-000"/>
        </InputContainer>
        <InputContainer>
          <InfoAddressLabel htmlFor="complement">Complemento</InfoAddressLabel>
          <InfoAddressInput type="text" id="complement" value="N/A"/>
        </InputContainer>
        <InputContainer>
          <InfoAddressLabel htmlFor="referencePoint">
            Ponto de Referência
          </InfoAddressLabel>
          <InfoAddressInput type="text" id="referencePoint" value="Ao lado da Escola Natalia Donada Melillo"/>
        </InputContainer>
        </ThirdRow>
      </AddressContainer>
    </>
  );
}
