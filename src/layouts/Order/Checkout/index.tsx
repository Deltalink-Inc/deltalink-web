import React from "react";
import { useParams } from "react-router-dom";

import { CustomerNav } from "../../../components/Header";
import { CreditCardDetails } from "../../../components/PaymentMethods/CreditCardDetails";
import { SelectPaymentMethod } from "../../../components/PaymentMethods/SelectPaymentMethod";
import { AddressForm } from "../../../components/Form/Address";

import * as styles from "./style";

import { ProductsDb } from "../../../db/Products";
import { WeightFee } from "../../../helpers/feeRates";
import { palette } from "../../../helpers/ColorPalette";

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
      <CustomerNav />
      <div
        style={{
          padding: "1rem",
          display: "grid",
          gridTemplateColumns: "4fr 1fr",

          backgroundColor: palette().platinum2,
        }}
      >
        <div>
          <div>
            <h1>Endereço</h1>
            <AddressForm />
          </div>
          <styles.PaymentContainer>
            <styles.PaymentMethodSelect>
              <styles.PaymentContainerTitle>
                Escolha como Pagar
              </styles.PaymentContainerTitle>
              <div>
                <SelectPaymentMethod />
              </div>
            </styles.PaymentMethodSelect>
            <div>
              <CreditCardDetails fee={fee} productObject={product} />
            </div>
          </styles.PaymentContainer>
        </div>
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
      </div>
    </>
  );
}
