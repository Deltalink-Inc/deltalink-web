import React from "react";
import { useParams } from "react-router-dom";

import { AddressForm } from "../../../components/Form/Address/Address";
import { CustomerNav } from "../../../components/Header";
import { PixDetails } from "../../../components/PaymentMethods/PixDetails";

import * as styles from "./styles";

import { ProductsDb } from "../../../db/Products";
import { WeightFee } from "../../../helpers/feeRates";

export function Checkout() {
  const { productId } = useParams();
  let product;

  ProductsDb.forEach((currentProduct) => {
    if (currentProduct.id == productId) {
      product = currentProduct;
    }
  });

  function calculateDeliveryFee() {
    const weightFee = WeightFee.ranges.filter(
      ({ min, max }) => product.weight >= min && product.weight < max
    );
    return weightFee[0].rate == null ? -1 : weightFee[0].rate;
  }

  const fee = calculateDeliveryFee();

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CustomerNav />
        <styles.Container>
          <styles.MainContainer>
            <styles.AddressBox>
              <styles.AddressTitle>Endereço</styles.AddressTitle>
              <AddressForm />
            </styles.AddressBox>
            <styles.PaymentContainer>
              <styles.PaymentMethodSelect>
                {/* <styles.PaymentContainerTitle>
                  Escolha como Pagar
                </styles.PaymentContainerTitle> */}
                <div>
                  <styles.SelectMethodContainer>
                    <styles.MethodButton htmlFor="pix">
                      <input type="radio" id="pix" name="paymentMethod"/>
                      <span>PIX</span>
                      <i className="fa-brands fa-pix"></i>
                    </styles.MethodButton>
                    <styles.MethodButton htmlFor="creditCard">
                      <input
                        type="radio"
                        id="creditCard"
                        name="paymentMethod"
                      />
                      <span>Cartão de Crédito</span>
                      <i className="fa-solid fa-credit-card"></i>
                    </styles.MethodButton>
                    <styles.MethodButton htmlFor="money">
                      <input type="radio" id="money" name="paymentMethod"/>
                      <span>Dinheiro</span>
                      <i className="fa-solid fa-money-bill"></i>
                    </styles.MethodButton>
                  </styles.SelectMethodContainer>
                </div>
              </styles.PaymentMethodSelect>
              <div>
                <PixDetails/>
              </div>
            </styles.PaymentContainer>
          </styles.MainContainer>
          <div>
            <h1>Resumo do Pedido</h1>
            <hr />
            <table>
              <tr>
                <td>Produto</td>
                <td>R$ {product.price}</td>
              </tr>
              <tr>
                <td>Tax. Entrega</td>
                <td>R$ {fee.toFixed(2)}</td>
              </tr>
            </table>
            <hr />
            <table>
              <tr>
                <td>Você pagará</td>
                <td>R$ {(parseFloat(product.price) + fee).toFixed(2)}</td>
              </tr>
            </table>
            <button>Finalizar Pedido</button>
          </div>
        </styles.Container>
      </div>
    </>
  );
}
