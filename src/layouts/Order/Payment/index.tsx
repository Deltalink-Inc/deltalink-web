import React from "react";
import { Link, useParams } from "react-router-dom";

import * as styles from "./styles";

import { ProductsDb } from "../../../db/Products";
import { calculateDeliveryFee } from "../../../utils/calculateDeliveryFee";
import { Order } from "../../../services/order.service";

import { CreditCardDetails } from "./../../../components/PaymentMethods/CreditCardDetails";

export function Payment(props) {
  const { productId } = useParams();
  let product;

  ProductsDb.forEach((currentProduct) => {
    if (currentProduct.id == productId) {
      product = currentProduct;
    }
  });

  const fee = calculateDeliveryFee(product, 5.4);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <styles.Header>
          <styles.BackButton onClick={() => {window.history.back()}}>
            <i className="fa-solid fa-arrow-left"></i>
            Voltar
          </styles.BackButton>
          <styles.Logo src="/deltalink_logo.svg" alt="" />
        </styles.Header>
        <styles.Container>
          <styles.AddressBox>
            <styles.AddressHeader>
              <styles.Icon className="fa-solid fa-dollar-sign"></styles.Icon>
              <styles.Title>Escolha com Pagar</styles.Title>
            </styles.AddressHeader>
            <CreditCardDetails productObject={product} fee={fee}/>
          </styles.AddressBox>
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
                <styles.TableData>Tax. Peso</styles.TableData>
                <styles.TableData>
                  R$ {fee["pricePerKg"].toFixed(2)}
                </styles.TableData>
              </styles.TableRow>
              <styles.TableRow>
                <styles.TableData>Tax. Distância</styles.TableData>
                <styles.TableData>R$ {fee["pricePerKm"].toFixed(2)}</styles.TableData>
              </styles.TableRow>
            </table>
            <styles.HorizontalRule />
            <table>
              <styles.TableRow>
                <styles.TableData>Você pagará</styles.TableData>
                <styles.TableData>R$ {fee["total"].toFixed(2)}</styles.TableData>
              </styles.TableRow>
            </table>
            <Link
              to={`/order/completed`}
              style={{
                marginTop: "auto",
              }}
            >
              <styles.ConfirmButton onClick={()=>{
                new Order().sendOrder(product, fee)
              }}>Finalizar Pedido</styles.ConfirmButton>
            </Link>
          </styles.ResumeOrderContainer>
        </styles.Container>
      </div>
    </>
  );
}
