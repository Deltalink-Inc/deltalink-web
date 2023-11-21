import React from "react";
import { useParams } from "react-router-dom";

import { CustomerNav } from "../../../components/Header";
import { CreditCardDetails } from "../../../components/PaymentMethods/CreditCardDetails";
import { SelectPaymentMethod } from "../../../components/PaymentMethods/SelectPaymentMethod";
import { AddressForm } from "../../../components/Form/Address";

import * as styles from "./style";

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
      <CustomerNav />
      <div>
        <div>
          <div>
            <h1>Endereço</h1>
            <AddressForm />
          </div>
          <styles.PaymentContainer>
            <div>
              <h1>Escolha como Pagar</h1>
              <div>
                <SelectPaymentMethod />
              </div>
            </div>
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
              <td>R$ {fee}</td>
            </tr>
          </table>
          <hr />
          <table>
            <tr>
              <td>Você pagará</td>
              <td>R$ {parseFloat(product.price) + fee}</td>
            </tr>
          </table>
          <button>Finalizar Pedido</button>
        </div>
      </div>
    </>
  );
}
