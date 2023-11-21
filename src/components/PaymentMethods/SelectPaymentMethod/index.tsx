import React from "react";
import * as styles from "./styles";

export function SelectPaymentMethod() {
  return (
    <styles.SelectMethodContainer>
      <styles.MethodButton htmlFor="pix">
        <input type="radio" id="pix" name="paymentMethod" />
        <span>PIX</span>
        <i className="fa-brands fa-pix"></i>
      </styles.MethodButton>
      <styles.MethodButton htmlFor="creditCard">
        <input type="radio" id="creditCard" name="paymentMethod" />
        <span>Cartão de Crédito</span>
        <i className="fa-solid fa-credit-card" style={{}}></i>
      </styles.MethodButton>
      <styles.MethodButton htmlFor="money">
        <input type="radio" id="money" name="paymentMethod" />
        <span>Dinheiro</span>
        <i className="fa-solid fa-money-bill"></i>
      </styles.MethodButton>
    </styles.SelectMethodContainer>
  );
}
