import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProductCardBody,
  ProductImg,
  ProductName,
  PriceStyle,
  InstallmentsStyle,
  LikeButton,
  BuyButton,
} from "./styles";

import { sessionSaveData } from "../../util/sessionSave";

export function ProductCatalogCard(props) {
  return (
    <ProductCardBody id="productCard">
      <ProductImg src={props.imgPath} alt="" id="productImg" />
      <ProductName id="productName">{props.name}</ProductName>
      <PriceStyle id="productPrice">
        <span>R$</span>
        {props.price}
      </PriceStyle>
      <InstallmentsStyle id="productInstallments">
        <span>em x</span>
        {props.installments}
        <span>{` R$${(props.price / props.installments).toFixed(2)}`}</span>
      </InstallmentsStyle>
      <div>
        <Link to={`/order/checkout/${props.id}`}>
          <BuyButton>Comprar</BuyButton>
        </Link>
      </div>
    </ProductCardBody>
  );
}
