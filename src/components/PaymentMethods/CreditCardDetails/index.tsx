import React from "react";

import * as styles from "./styles";

export function CreditCardDetails({ productObject, fee }) {
  const installmentsList: number[] = [];

  function calculateInstallments() {
    for (
      let count = 1;
      count <= parseInt(productObject.installments);
      count++
    ) {
      const installmentValue = (fee.total / count).toFixed(2);
      installmentsList.push(parseFloat(installmentValue));
    }
  }
  calculateInstallments();
  return (
    <>
      <styles.CreditCardContainer>
        <styles.CreditCardBox>
          <styles.FirstRow>
            <styles.InputContainer>
              <styles.Title htmlFor="cardNumber">
                Número do Cartão*
              </styles.Title>
              <styles.Input type="text" id="cardNumber" value="5556 2066 3162 2800"/>
            </styles.InputContainer>
            <styles.InputContainer>
              <styles.Title htmlFor="expirationDate">
                Data de Validade*
              </styles.Title>
              <styles.Input type="date" id="expirationDate"/>
            </styles.InputContainer>
          </styles.FirstRow>
          <styles.SecondRow>
            <styles.InputContainer>
              <styles.Title htmlFor="cvv">CVV*</styles.Title>
              <styles.Input type="text" id="cvv" value="387"/>
            </styles.InputContainer>
            <styles.InputContainer>
              <styles.Title htmlFor="cpf">CPF do Titular*</styles.Title>
              <styles.Input type="text" id="cpf" value="977.684.786-22"/>
            </styles.InputContainer>
          </styles.SecondRow>
          <styles.ThirdRow>
            <styles.InputContainer>
              <styles.Title htmlFor="fullName">
                Nome Completo do Titular*
              </styles.Title>
              <styles.Input type="text" id="fullName" value="Pedro Soares"/>
            </styles.InputContainer>
            <styles.InputContainer>
              <styles.Title htmlFor="installments">Parcelas</styles.Title>
              <styles.Select name="installments" id="installments">
                {installmentsList.map((value, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}x de R$ {value.toFixed(2)}
                  </option>
                ))}
              </styles.Select>
            </styles.InputContainer>
          </styles.ThirdRow>
        </styles.CreditCardBox>
      </styles.CreditCardContainer>
    </>
  );
}
