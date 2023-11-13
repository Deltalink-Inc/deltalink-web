import React from "react";

export function ProductCatalogCard(props) {
  return (
    <div id="productCart">
      <img src={props.LogoPath} alt="" id="productImg" />
      <p id="productName">{props.name}</p>
      <p id="productPrice">{props.description}</p>
      <p id="productInstallments">{props.category}</p>
    </div>
  );
}
