import React from "react";
import { useParams, Link } from "react-router-dom";

import { AddressForm } from "../../../components/Form/Address/Address";

import * as styles from "./styles";

import { ProductsDb } from "../../../db/Products";
import { WeightFee } from "../../../helpers/feeRates";
import { calculateDeliveryFee } from "../../../utils/calculateDeliveryFee";

export function Address(props) {
  const { productId } = useParams();
  let product;

  ProductsDb.forEach((currentProduct) => {
    if (currentProduct.id == productId) {
      product = currentProduct;
    }
  });

  const fee = calculateDeliveryFee(product, 0);

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
              <styles.Icon className="fa-solid fa-house"></styles.Icon>
              <styles.Title>Adicione um Endereço</styles.Title>
            </styles.AddressHeader>
            <AddressForm />
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
                <styles.TableData>----</styles.TableData>
              </styles.TableRow>
            </table>
            <styles.HorizontalRule />
            <table>
              <styles.TableRow>
                <styles.TableData>Você pagará</styles.TableData>
                <styles.TableData>----</styles.TableData>
              </styles.TableRow>
            </table>
            <Link
              to={`/order/payment/${productId}`}
              style={{
                marginTop: "auto",
              }}
            >
              <styles.ConfirmButton>Próxima Etapa</styles.ConfirmButton>
            </Link>
          </styles.ResumeOrderContainer>
        </styles.Container>
      </div>
    </>
  );
}
