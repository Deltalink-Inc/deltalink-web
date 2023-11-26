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
        <styles.Container style={{}}>
          <styles.MainContainer>
            <styles.AddressBox>
              <styles.Title>Endereço</styles.Title>
              <AddressForm />
            </styles.AddressBox>
            <styles.PaymentContainer>
              <styles.PaymentMethodSelect>
                <styles.Title>Pagamento</styles.Title>
                <styles.SelectMethodContainer>
                  <styles.MethodButton htmlFor="pix">
                    <input type="radio" id="pix" name="paymentMethod" />
                    <styles.MethodTitle>PIX</styles.MethodTitle>
                    <styles.MethodIcon className="fa-brands fa-pix"></styles.MethodIcon>
                  </styles.MethodButton>
                  <styles.MethodButton htmlFor="creditCard">
                    <input type="radio" id="creditCard" name="paymentMethod" />
                    <styles.MethodTitle>Cartão de Crédito</styles.MethodTitle>
                    <styles.MethodIcon className="fa-solid fa-credit-card"></styles.MethodIcon>
                  </styles.MethodButton>
                  <styles.MethodButton htmlFor="money">
                    <input type="radio" id="money" name="paymentMethod" />
                    <styles.MethodTitle>Dinheiro</styles.MethodTitle>
                    <styles.MethodIcon className="fa-solid fa-money-bill"></styles.MethodIcon>
                  </styles.MethodButton>
                </styles.SelectMethodContainer>
              </styles.PaymentMethodSelect>
              <div>
                <PixDetails />
              </div>
            </styles.PaymentContainer>
          </styles.MainContainer>
          <styles.ResumeOrderContainer>
            <styles.ResumeOrderTitle>Resumo do Pedido</styles.ResumeOrderTitle>
            <styles.HorizontalRule />
            <table>
              <styles.TableRow>
                <styles.TableData>{product.name}</styles.TableData>
                <styles.TableData>x1</styles.TableData>
              </styles.TableRow>
              <styles.TableRow>
                <styles.TableData>Produto</styles.TableData>
                <styles.TableData>R$ {product.price}</styles.TableData>
              </styles.TableRow>
              <styles.TableRow>
                <styles.TableData>Tax. Entrega</styles.TableData>
                <styles.TableData>R$ {fee.toFixed(2)}</styles.TableData>
              </styles.TableRow>
            </table>
            <styles.HorizontalRule />
            <table>
              <styles.TableRow>
                <styles.TableData>Você pagará</styles.TableData>
                <styles.TableData>
                  R$ {(parseFloat(product.price) + fee).toFixed(2)}
                </styles.TableData>
              </styles.TableRow>
            </table>
            <styles.ConfirmButton>Finalizar Pedido</styles.ConfirmButton>
          </styles.ResumeOrderContainer>
        </styles.Container>
      </div>
    </>
  );
}
