import { ContentPasteOffSharp } from "@mui/icons-material";
import React from "react";

export function CreditCardDetails({ productObject, fee }) {
  const installmentsList: number[] = [];

  function calculateInstallments() {
    const productPrice = parseFloat(productObject.price) + fee;

    for (
      let count = 1;
      count <= parseInt(productObject.installments);
      count++
    ) {
      const installmentValue = (productPrice / count).toFixed(2);
      installmentsList.push(parseFloat(installmentValue));
    }
  }
  calculateInstallments();
  console.log(fee);
  return (
    <>
      <div>
        <label htmlFor="cardNumber">Número do Cartão*</label>
        <input type="text" id="cardNumber" />
      </div>
      <div>
        <label htmlFor="expirationDate">Data de Validade*</label>
        <input type="date" id="expirationDate" />
      </div>
      <div>
        <label htmlFor="cvv">CVV*</label>
        <input type="text" id="cvv" />
      </div>
      <div>
        <label htmlFor="cpf">CPF do Titular*</label>
        <input type="text" id="cpf" />
      </div>
      <div>
        <label htmlFor="fullName">Nome Completo do Titular*</label>
        <input type="text" id="fullName" />
      </div>
      <div>
        <label htmlFor="installments">Parcelas</label>
        <select name="installments" id="installments">
          {installmentsList.map((value, index) => (
            <option key={index} value={index + 1}>
              {index + 1}x de R$ {value.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
