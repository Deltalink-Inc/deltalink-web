import React from "react";

export function ProductCatalogCard(props) {
  return (
    <div id="productCard">
      <img
        src="src/assets/img/products-image/4786.jpg"
        alt=""
        id="productImg"
      />
      <p id="productName">{props.name}</p>
      <p id="productPrice">
        <span>R$</span>
        {props?.price}
      </p>
      <p id="productInstallments">
        <span>em x</span>
        {props.installments}
        <span>{` ${(props.price / props.installments).toFixed(2)}`}</span>
      </p>
    </div>
  );
}
